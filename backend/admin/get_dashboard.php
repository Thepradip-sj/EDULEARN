<?php
include '../db.php';

// Pending courses
$pendingCourses = [];
$res = $conn->query("SELECT c.*, i.IMail AS InstructorMail 
                     FROM Course c 
                     JOIN Instructor i ON c.InstructorId = i.InstructorId 
                     WHERE c.Approved = 0");
while ($r = $res->fetch_assoc()) $pendingCourses[] = $r;

// Pending enrollments
$pendingEnrollments = [];
$res2 = $conn->query("SELECT e.EnrollmentId, s.SName, c.CName, e.Status 
                      FROM Enrollment e 
                      JOIN Student s ON e.StudentId = s.StudentId 
                      JOIN Course c ON e.CourseId = c.CourseId 
                      WHERE e.Status = 'Pending'");
while ($r = $res2->fetch_assoc()) $pendingEnrollments[] = $r;

// Instructors
$instructors = [];
$res3 = $conn->query("SELECT * FROM Instructor");
while ($r = $res3->fetch_assoc()) $instructors[] = $r;

// Approved courses
$approvedCourses = [];
$res4 = $conn->query("SELECT c.*, i.IMail AS InstructorMail 
                      FROM Course c 
                      LEFT JOIN Instructor i ON c.InstructorId = i.InstructorId 
                      WHERE c.Approved = 1");
while ($r = $res4->fetch_assoc()) $approvedCourses[] = $r;

echo json_encode([
  "status" => "success",
  "pendingCourses" => $pendingCourses,
  "pendingEnrollments" => $pendingEnrollments,
  "instructors" => $instructors,
  "approvedCourses" => $approvedCourses
]);
?>
