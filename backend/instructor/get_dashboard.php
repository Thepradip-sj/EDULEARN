<?php
include '../db.php';
$instructorId = intval($_GET['InstructorId'] ?? 0);

$courses = [];
$res = $conn->query("SELECT * FROM Course WHERE InstructorId = $instructorId");
while ($r = $res->fetch_assoc()) $courses[] = $r;

$quizzes = [];
$res2 = $conn->query("SELECT q.*, c.CName 
                      FROM Quiz q 
                      JOIN Course c ON q.CourseId = c.CourseId 
                      WHERE c.InstructorId = $instructorId");
while ($r = $res2->fetch_assoc()) $quizzes[] = $r;

echo json_encode(["status" => "success", "courses" => $courses, "quizzes" => $quizzes]);
?>
