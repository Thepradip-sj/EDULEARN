<?php
// CORS + JSON headers (must be before any output)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Respond to preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Optional: enable errors while debugging (remove or comment out in production)
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include 'db.php';
include 'utils.php'; // you already have get_json_input(), json_error(), etc.

$data = get_json_input();
$email = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

if (!$email || !$password) {
    json_error("Missing credentials", 400);
    exit;
}

// Tables to check: [tableName, emailColumn, idColumn, roleName]
$tables = [
  ["Admin","AMail","AdminId","Admin"],
  ["Instructor","IMail","InstructorId","Instructor"],
  ["Student","SMail","StudentId","Student"]
];

foreach ($tables as $t) {
    [$table, $emailCol, $idCol, $role] = $t;

    // Prepare query to fetch by email only (avoid referencing unknown password columns)
    $sql = "SELECT * FROM `$table` WHERE `$emailCol` = ? LIMIT 1";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        // prepare failed (rare) — skip this table but log for debugging
        error_log("Prepare failed for $table: " . $conn->error);
        continue;
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    if ($res && $res->num_rows > 0) {
        $row = $res->fetch_assoc();

        // Determine which password column exists in this row
        $pwColsToTry = ['Password', 'APassword', 'Pass', 'pwd']; // common variants
        $storedPw = null;
        foreach ($pwColsToTry as $col) {
            if (array_key_exists($col, $row)) {
                $storedPw = $row[$col];
                break;
            }
        }

        // If no password column found, respond with server error (schema mismatch)
        if ($storedPw === null) {
            error_log("No password column found for table $table (row keys: " . implode(',', array_keys($row)) . ")");
            json_error("Server configuration error", 500);
            exit;
        }

        // Simple plaintext compare (you said no complex auth needed). If you used hashed passwords, use password_verify().
        if ($storedPw === $password) {
            // Success — remove password field from response for safety
            unset($row['Password']);
            unset($row['APassword']);
            unset($row['pwd']);
            unset($row['Pass']);

            echo json_encode(["status" => "success", "role" => $role, "user" => $row]);
            exit;
        } else {
            // wrong password for this table — continue checking next role (or we could return invalid now)
            // but it's okay to continue so we can check other tables if email is reused across roles (unlikely)
            continue;
        }
    }
}

// If no match
json_error("Invalid credentials", 401);
exit;
?>
