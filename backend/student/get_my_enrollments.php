<?php
include '../db.php';
$sid=intval($_GET['studentId'] ?? 0);
$res=$conn->query("SELECT e.EnrollmentId,c.CName,e.Status FROM Enrollment e JOIN Course c ON e.CourseId=c.CourseId WHERE e.StudentId=$sid");
$rows=[];
while($r=$res->fetch_assoc()) $rows[]=$r;
echo json_encode(["status"=>"success","enrollments"=>$rows]);
?>
