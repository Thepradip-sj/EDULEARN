<?php
include '../db.php';
$res=$conn->query("SELECT e.EnrollmentId, s.SName, c.CName, e.Status
                   FROM Enrollment e
                   JOIN Student s ON e.StudentId=s.StudentId
                   JOIN Course c ON e.CourseId=c.CourseId
                   WHERE e.Status='Pending'");
$rows=[];
while($r=$res->fetch_assoc()) $rows[]=$r;
echo json_encode(["status"=>"success","pendingEnrollments"=>$rows]);
?>
