<?php
include '../db.php';
$res=$conn->query("SELECT c.*, i.IMail AS InstructorMail FROM Course c JOIN Instructor i ON c.InstructorId=i.InstructorId WHERE c.Approved=0");
$rows=[];
while($r=$res->fetch_assoc()) $rows[]=$r;
echo json_encode(["status"=>"success","pendingCourses"=>$rows]);
?>
