<?php
include '../db.php';
$res=$conn->query("SELECT * FROM Course WHERE Approved=1");
$courses=[];
while($r=$res->fetch_assoc()) $courses[]=$r;
echo json_encode(["status"=>"success","courses"=>$courses]);
?>
