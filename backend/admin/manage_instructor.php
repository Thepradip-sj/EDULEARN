<?php
include '../db.php';
include '../utils.php';
$data=get_json_input();
$action=$data['action'] ?? '';

if($action==='add'){
  $mail=$data['IMail'] ?? '';
  $contact=$data['IContact'] ?? '';
  $qual=$data['Qualification'] ?? '';
  $pass=$data['Password'] ?? '';
  $stmt=$conn->prepare("INSERT INTO Instructor (IMail,IContact,Qualification,Password) VALUES (?,?,?,?)");
  $stmt->bind_param("ssss",$mail,$contact,$qual,$pass);
  if($stmt->execute()) echo json_encode(["status"=>"success"]);
  else json_error("Error adding instructor");
}
elseif($action==='delete'){
  $iid=intval($data['InstructorId'] ?? 0);
  $stmt=$conn->prepare("DELETE FROM Instructor WHERE InstructorId=?");
  $stmt->bind_param("i",$iid);
  if($stmt->execute()) echo json_encode(["status"=>"success"]);
  else json_error("Error deleting instructor");
}
else json_error("Invalid action");
?>
