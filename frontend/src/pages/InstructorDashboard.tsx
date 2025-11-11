import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { mockCourses, mockStudentProgress } from '@/data/mockData';

export default function InstructorDashboard() {
  const myCourses = mockCourses.filter(c => c.instructorId === '2');
  const totalStudents = myCourses.reduce((acc, course) => acc + course.enrolled, 0);
  const avgCompletion = mockStudentProgress.reduce((acc, p) => acc + p.progress, 0) / mockStudentProgress.length;

  const stats = [
    {
      title: 'My Courses',
      value: myCourses.length.toString(),
      icon: BookOpen,
      description: 'Active courses',
      color: 'primary',
    },
    {
      title: 'Total Students',
      value: totalStudents.toString(),
      icon: Users,
      description: 'Across all courses',
      color: 'secondary',
    },
    {
      title: 'Avg Completion',
      value: `${Math.round(avgCompletion)}%`,
      icon: CheckCircle,
      description: 'Student progress',
      color: 'accent',
    },
    {
      title: 'Performance',
      value: 'Excellent',
      icon: TrendingUp,
      description: 'This month',
      color: 'purple',
    },
  ];

  return (
    <DashboardLayout role="instructor" userName="Jane Instructor">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome back, Jane!
          </h1>
          <p className="text-lg text-muted-foreground">Monitor your courses and student progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const colors = [
              'from-primary/10 to-primary/5 border-primary/20',
              'from-secondary/10 to-secondary/5 border-secondary/20',
              'from-accent/10 to-accent/5 border-accent/20',
              'from-purple-500/10 to-purple-500/5 border-purple-500/20'
            ];
            const iconColors = ['text-primary', 'text-secondary', 'text-accent', 'text-purple-500'];
            
            return (
              <Card 
                key={stat.title}
                className={`bg-gradient-to-br ${colors[index]} hover:shadow-[var(--shadow-medium)] transition-all duration-300 border`}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-semibold text-foreground/80">{stat.title}</CardTitle>
                  <div className={`p-2 bg-background/50 rounded-lg ${iconColors[index]}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card className="hover:shadow-[var(--shadow-medium)] transition-all border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Recent Student Activity</CardTitle>
            <CardDescription className="text-base">Latest student progress updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockStudentProgress.map((progress, index) => (
                <div 
                  key={progress.studentId + progress.courseId} 
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border-b border-border/50 last:border-0 hover:bg-muted/70 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-foreground">{progress.studentName}</p>
                    <p className="text-sm text-muted-foreground">{progress.courseName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-primary">{progress.progress}%</p>
                    {progress.quizScore && (
                      <p className="text-sm text-muted-foreground">Quiz: {progress.quizScore}%</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
