<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$sid=intval($data['StudentId'] ?? 0);
$qid=intval($data['QuizId'] ?? 0);
$marks=intval($data['MarksObtained'] ?? 0);

if(!$sid || !$qid) json_error("Missing IDs");

$conn->query("CREATE TABLE IF NOT EXISTS QuizAttempt (
  AttemptId INT AUTO_INCREMENT PRIMARY KEY,
  StudentId INT,
  QuizId INT,
  MarksObtained INT,
  AttemptDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (StudentId) REFERENCES Student(StudentId),
  FOREIGN KEY (QuizId) REFERENCES Quiz(QuizId)
)");

$stmt=$conn->prepare("INSERT INTO QuizAttempt (StudentId,QuizId,MarksObtained) VALUES (?,?,?)");
$stmt->bind_param("iii",$sid,$qid,$marks);
if($stmt->execute()) echo json_encode(["status"=>"success","message"=>"Quiz attempt recorded"]);
else json_error("Error: ".$conn->error);
?>
