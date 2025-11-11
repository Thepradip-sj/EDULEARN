<?php
include '../db.php';
include '../utils.php';

$data=get_json_input();
$cid=intval($data['CourseId'] ?? 0);
$title=$data['Title'] ?? '';
$marks=intval($data['TotalMarks'] ?? 0);

if(!$cid || !$title) json_error("Missing fields");

$stmt=$conn->prepare("INSERT INTO Quiz (CourseId,Title,TotalMarks) VALUES (?,?,?)");
$stmt->bind_param("isi",$cid,$title,$marks);
if($stmt->execute()) echo json_encode(["status"=>"success"]);
else json_error("Error creating quiz");
?>
