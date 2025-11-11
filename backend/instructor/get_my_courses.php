<?php
include '../db.php';
$iid=intval($_GET['instructorId'] ?? 0);
$res=$conn->query("SELECT * FROM Course WHERE InstructorId=$iid");
$courses=[];
while($r=$res->fetch_assoc()) $courses[]=$r;
echo json_encode(["status"=>"success","courses"=>$courses]);
?>
