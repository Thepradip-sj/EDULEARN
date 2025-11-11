import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { toast } from 'sonner';
import { mockUsers } from '@/data/mockData';

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role: 'student' | 'instructor' | 'admin') => {
    // Mock authentication - in real app, you'd validate against backend
    const user = mockUsers.find(u => u.role === role);
    
    if (email && password) {
      toast.success(`Logged in as ${role}`);
      
      // Navigate to appropriate dashboard
      if (role === 'student') navigate('/student');
      if (role === 'instructor') navigate('/instructor');
      if (role === 'admin') navigate('/admin');
    } else {
      toast.error('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 shadow-[var(--shadow-soft)]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduLearn LMS
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-semibold text-primary">🎓 Transform Your Learning Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            Welcome to EduLearn
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your comprehensive learning management system for students, instructors, and administrators
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">For Students</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Access courses, track progress, take quizzes, and earn certificates to advance your career
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 border-secondary/20 hover:border-secondary/40 bg-gradient-to-br from-card to-secondary/5">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-2xl">For Instructors</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Create courses, manage content, track student progress, and create engaging assessments
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 border-accent/20 hover:border-accent/40 bg-gradient-to-br from-card to-accent/5">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <GraduationCap className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-2xl">For Admins</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Manage users, courses, and oversee the entire learning platform with powerful tools
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Login Section */}
        <div className="max-w-lg mx-auto">
          <Card className="shadow-[var(--shadow-strong)] border-border/50 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-3xl text-center">Login to Your Account</CardTitle>
              <CardDescription className="text-center text-base">Select your role and enter credentials to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/50">
                  <TabsTrigger value="student" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Student
                  </TabsTrigger>
                  <TabsTrigger value="instructor" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                    Instructor
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                    Admin
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="student" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@lms.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all" 
                    onClick={() => handleLogin('student')}
                  >
                    Login as Student
                  </Button>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground font-medium">
                      Demo: student@lms.com / any password
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input
                      id="instructor-email"
                      type="email"
                      placeholder="instructor@lms.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor-password">Password</Label>
                    <Input
                      id="instructor-password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full h-11 bg-gradient-to-r from-secondary to-secondary/90 hover:shadow-lg transition-all" 
                    onClick={() => handleLogin('instructor')}
                  >
                    Login as Instructor
                  </Button>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground font-medium">
                      Demo: instructor@lms.com / any password
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="admin" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@lms.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full h-11 bg-gradient-to-r from-accent to-accent/90 hover:shadow-lg transition-all" 
                    onClick={() => handleLogin('admin')}
                  >
                    Login as Admin
                  </Button>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground font-medium">
                      Demo: admin@lms.com / any password
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
