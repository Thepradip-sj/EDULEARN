<?php
include '../db.php';
include '../utils.php';

$data=get_json_input();
$iid=intval($data['InstructorId'] ?? 0);
$name=$data['CName'] ?? '';
$credits=intval($data['Credits'] ?? 0);
$duration=$data['Duration'] ?? '';

if(!$iid || !$name) json_error("Missing details");

$stmt=$conn->prepare("INSERT INTO Course (InstructorId,CName,Credits,Duration,Approved) VALUES (?,?,?,?,0)");
$stmt->bind_param("isis",$iid,$name,$credits,$duration);
if($stmt->execute()) echo json_encode(["status"=>"success","message"=>"Course submitted for admin approval"]);
else json_error("Error: ".$conn->error);
?>
