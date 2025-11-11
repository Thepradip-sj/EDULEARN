<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$cid=intval($data['CourseId'] ?? 0);
$approve=$data['Approve'] ?? true;

$status=$approve ? 1 : 0;
$stmt=$conn->prepare("UPDATE Course SET Approved=? WHERE CourseId=?");
$stmt->bind_param("ii",$status,$cid);
if($stmt->execute()) echo json_encode(["status"=>"success"]);
else json_error("Error approving course");
?>
