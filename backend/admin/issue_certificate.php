<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$sid=intval($data['StudentId'] ?? 0);
$cid=intval($data['CourseId'] ?? 0);
$date=date("Y-m-d");

$stmt=$conn->prepare("INSERT INTO Certificate (StudentId,CourseId,IssueDate) VALUES (?,?,?)");
$stmt->bind_param("iis",$sid,$cid,$date);
if($stmt->execute()) echo json_encode(["status"=>"success","message"=>"Certificate issued"]);
else json_error("Error: ".$conn->error);
?>
