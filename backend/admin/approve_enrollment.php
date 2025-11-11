<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$eid=intval($data['EnrollmentId'] ?? 0);
$action=$data['Action'] ?? 'Approved';

$stmt=$conn->prepare("UPDATE Enrollment SET Status=? WHERE EnrollmentId=?");
$stmt->bind_param("si",$action,$eid);
if($stmt->execute()) echo json_encode(["status"=>"success"]);
else json_error("Error approving enrollment");
?>
