<?php
include '../db.php';
$studentId = intval($_GET['StudentId'] ?? 0);

// Approved courses (to show available options)
$courses = [];
$res = $conn->query("SELECT * FROM Course WHERE Approved = 1");
while ($r = $res->fetch_assoc()) $courses[] = $r;

// Student's enrollments
$enrollments = [];
$res2 = $conn->query("SELECT e.EnrollmentId, c.CName, e.Status 
                      FROM Enrollment e 
                      JOIN Course c ON e.CourseId = c.CourseId 
                      WHERE e.StudentId = $studentId");
while ($r = $res2->fetch_assoc()) $enrollments[] = $r;

// Certificates earned
$certificates = [];
$res3 = $conn->query("SELECT cert.CertificateId, c.CName, cert.IssueDate 
                      FROM Certificate cert 
                      JOIN Course c ON cert.CourseId = c.CourseId 
                      WHERE cert.StudentId = $studentId");
while ($r = $res3->fetch_assoc()) $certificates[] = $r;

echo json_encode([
  "status" => "success",
  "courses" => $courses,
  "enrollments" => $enrollments,
  "certificates" => $certificates
]);
?>
