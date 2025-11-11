import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { mockCourses } from '@/data/mockData';

export default function AdminDashboard() {
  const totalEnrollments = mockCourses.reduce((acc, course) => acc + course.enrolled, 0);

  const stats = [
    {
      title: 'Total Courses',
      value: mockCourses.length.toString(),
      icon: BookOpen,
      description: 'Active courses',
      color: 'primary',
    },
    {
      title: 'Total Students',
      value: '250',
      icon: Users,
      description: 'Registered students',
      color: 'secondary',
    },
    {
      title: 'Instructors',
      value: '15',
      icon: GraduationCap,
      description: 'Active instructors',
      color: 'accent',
    },
    {
      title: 'Enrollments',
      value: totalEnrollments.toString(),
      icon: TrendingUp,
      description: 'Total enrollments',
      color: 'purple',
    },
  ];

  return (
    <DashboardLayout role="admin" userName="Admin User">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">Manage your learning platform</p>
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

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-[var(--shadow-medium)] transition-all border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border-b border-border/50">
                  <span className="text-muted-foreground">New student registration</span>
                  <span className="font-semibold text-primary">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border-b border-border/50">
                  <span className="text-muted-foreground">Course completed</span>
                  <span className="font-semibold text-secondary">5 hours ago</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">New course added</span>
                  <span className="font-semibold text-accent">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-medium)] transition-all border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border-b border-border/50">
                  <span className="text-muted-foreground">Server Status</span>
                  <span className="font-semibold text-success flex items-center gap-2">
                    <span className="h-2 w-2 bg-success rounded-full animate-pulse"></span>
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border-b border-border/50">
                  <span className="text-muted-foreground">Database</span>
                  <span className="font-semibold text-success flex items-center gap-2">
                    <span className="h-2 w-2 bg-success rounded-full animate-pulse"></span>
                    Healthy
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="font-semibold text-foreground">67% Used</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
