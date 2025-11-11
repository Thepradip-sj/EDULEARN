<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$cid=intval($data['CourseId'] ?? 0);
$sid=intval($data['StudentId'] ?? 0);
if(!$cid || !$sid) json_error("Missing IDs");

$stmt=$conn->prepare("INSERT INTO Enrollment (StudentId,CourseId,Status) VALUES (?,?, 'Pending')");
$stmt->bind_param("ii",$sid,$cid);
if($stmt->execute()) echo json_encode(["status"=>"success","message"=>"Enrollment sent for approval"]);
else json_error("Already applied or error: ".$conn->error);
?>
