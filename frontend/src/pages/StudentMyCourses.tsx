import { DashboardLayout } from '@/components/DashboardLayout';
import { CourseCard } from '@/components/CourseCard';
import { mockEnrolledCourses } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StudentMyCourses() {
  const inProgress = mockEnrolledCourses.filter(c => !c.completed);
  const completed = mockEnrolledCourses.filter(c => c.completed);

  return (
    <DashboardLayout role="student" userName="John Student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground">Track your enrolled courses and progress</p>
        </div>

        <Tabs defaultValue="in-progress" className="w-full">
          <TabsList>
            <TabsTrigger value="in-progress">In Progress ({inProgress.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completed.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inProgress.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  isEnrolled
                  progress={course.progress}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completed.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  isEnrolled
                  progress={course.progress}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
