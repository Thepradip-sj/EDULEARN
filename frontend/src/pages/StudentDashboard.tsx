import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, TrendingUp, Clock } from 'lucide-react';
import { mockEnrolledCourses } from '@/data/mockData';
import { CourseCard } from '@/components/CourseCard';

export default function StudentDashboard() {
  const stats = [
    {
      title: 'Enrolled Courses',
      value: '2',
      icon: BookOpen,
      description: 'Active learning paths',
    },
    {
      title: 'Certificates Earned',
      value: '1',
      icon: Award,
      description: 'Completed achievements',
    },
    {
      title: 'Average Progress',
      value: '82%',
      icon: TrendingUp,
      description: 'Across all courses',
    },
    {
      title: 'Study Time',
      value: '24h',
      icon: Clock,
      description: 'This week',
    },
  ];

  return (
    <DashboardLayout role="student" userName="John Student">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome back, John!
          </h1>
          <p className="text-lg text-muted-foreground">Continue your learning journey</p>
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

        {/* Continue Learning */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Continue Learning</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockEnrolledCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isEnrolled
                progress={course.progress}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
