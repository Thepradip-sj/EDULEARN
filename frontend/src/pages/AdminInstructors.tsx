import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { mockCourses } from '@/data/mockData';

export default function AdminInstructors() {
  const instructors = [
    {
      id: '2',
      name: 'Jane Instructor',
      email: 'instructor@lms.com',
      courses: mockCourses.filter(c => c.instructorId === '2').map(c => c.title),
      totalStudents: mockCourses.filter(c => c.instructorId === '2').reduce((acc, c) => acc + c.enrolled, 0),
      joinDate: '2023-12-01',
      status: 'Active',
    },
    {
      id: '3',
      name: 'Mark Teacher',
      email: 'mark@lms.com',
      courses: ['Python Programming', 'Data Science'],
      totalStudents: 180,
      joinDate: '2023-11-15',
      status: 'Active',
    },
  ];

  return (
    <DashboardLayout role="admin" userName="Admin User">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Instructors</h1>
          <p className="text-muted-foreground">Manage instructor accounts and assignments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Instructors</CardTitle>
            <CardDescription>Overview of instructors and their teaching activity</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Courses Teaching</TableHead>
                  <TableHead>Total Students</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instructors.map((instructor) => (
                  <TableRow key={instructor.id}>
                    <TableCell className="font-medium">{instructor.name}</TableCell>
                    <TableCell>{instructor.email}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {instructor.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="w-fit">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{instructor.totalStudents}</TableCell>
                    <TableCell>{new Date(instructor.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant="default">{instructor.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
