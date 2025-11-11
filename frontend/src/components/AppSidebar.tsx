import { 
  Home, 
  BookOpen, 
  Award, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  PlusCircle,
  BarChart
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { UserRole } from '@/types';
import { Button } from '@/components/ui/button';

interface AppSidebarProps {
  role: UserRole;
  userName: string;
}

export function AppSidebar({ role, userName }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const collapsed = state === 'collapsed';

  const handleLogout = () => {
    navigate('/');
  };

  const studentItems = [
    { title: 'Dashboard', url: '/student', icon: Home },
    { title: 'All Courses', url: '/student/courses', icon: BookOpen },
    { title: 'My Courses', url: '/student/my-courses', icon: FileText },
    { title: 'Certificates', url: '/student/certificates', icon: Award },
  ];

  const instructorItems = [
    { title: 'Dashboard', url: '/instructor', icon: Home },   
    { title: 'Students Progress', url: '/instructor/progress', icon: BarChart },
    { title: 'Create Quiz', url: '/instructor/quiz', icon: PlusCircle },
  ];

  const adminItems = [
    { title: 'Dashboard', url: '/admin', icon: Home },
    { title: 'Manage Courses', url: '/admin/courses', icon: BookOpen },
    { title: 'Students', url: '/admin/students', icon: Users },
    { title: 'Instructors', url: '/admin/instructors', icon: Users },
  ];

  const items = role === 'student' ? studentItems : role === 'instructor' ? instructorItems : adminItems;

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'} collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="text-sidebar-foreground">
              <h1 className="text-xl font-bold">EduLearn LMS</h1>
              <p className="text-sm text-sidebar-foreground/80 mt-1">{userName}</p>
            </div>
          )}
          {collapsed && (
            <div className="text-sidebar-foreground text-center font-bold text-xl">
              E
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80">
            {!collapsed && 'Navigation'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent text-sidebar-foreground"
                      activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
