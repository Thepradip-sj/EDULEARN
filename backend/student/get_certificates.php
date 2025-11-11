<?php
include '../db.php';
include '../utils.php';
$studentId = intval($_GET['studentId'] ?? 0);

$stmt = $conn->prepare("SELECT c.CName, cert.IssueDate FROM Certificate cert JOIN Course c ON cert.CourseId=c.CourseId WHERE cert.StudentId=?");
$stmt->bind_param("i", $studentId);
$stmt->execute();
$res=$stmt->get_result();
$rows=[];
while($r=$res->fetch_assoc()) $rows[]=$r;
echo json_encode(["status"=>"success","certificates"=>$rows]);
?>
