import { Course } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  isEnrolled?: boolean;
  progress?: number;
}

export function CourseCard({ course, onEnroll, isEnrolled, progress }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/50">
      <div className="h-48 overflow-hidden bg-muted relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
          <Badge 
            variant={course.level === 'Beginner' ? 'secondary' : 'default'}
            className="shrink-0"
          >
            {course.level}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-medium">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-accent" />
            <span>{course.enrolled} students enrolled</span>
          </div>
        </div>
        {progress !== undefined && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground font-medium">Progress</span>
              <span className="font-bold text-primary">{progress}%</span>
            </div>
            <div className="h-2.5 bg-background rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-4">
        {!isEnrolled && onEnroll && (
          <Button 
            onClick={() => onEnroll(course.id)} 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
          >
            Enroll Now
          </Button>
        )}
        {isEnrolled && (
          <Button variant="secondary" className="w-full hover:bg-primary hover:text-primary-foreground transition-all">
            Continue Learning
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
