import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockStudentProgress } from '@/data/mockData';

export default function InstructorProgress() {
  return (
    <DashboardLayout role="instructor" userName="Jane Instructor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Student Progress</h1>
          <p className="text-muted-foreground">Track individual student performance</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>View detailed progress for each student</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Quiz Score</TableHead>
                  <TableHead>Last Accessed</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudentProgress.map((progress) => (
                  <TableRow key={progress.studentId + progress.courseId}>
                    <TableCell className="font-medium">{progress.studentName}</TableCell>
                    <TableCell>{progress.courseName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={progress.progress} className="w-[100px]" />
                        <span className="text-sm text-muted-foreground">{progress.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {progress.quizScore ? (
                        <Badge variant={progress.quizScore >= 70 ? 'default' : 'destructive'}>
                          {progress.quizScore}%
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">Not taken</span>
                      )}
                    </TableCell>
                    <TableCell>{new Date(progress.lastAccessed).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={progress.progress >= 100 ? 'default' : 'secondary'}>
                        {progress.progress >= 100 ? 'Completed' : 'In Progress'}
                      </Badge>
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
