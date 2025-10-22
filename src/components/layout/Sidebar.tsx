import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  ClipboardList,
  FileText,
  DollarSign,
  BookOpen,
  Bus,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

interface SidebarProps {
  userRole: "admin" | "teacher" | "student" | "parent";
}

const getMenuItems = (role: string) => {
  const adminItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "Students", icon: GraduationCap, url: "/students" },
    { title: "Staff", icon: Users, url: "/staff" },
    { title: "Attendance", icon: Calendar, url: "/attendance" },
    { title: "Academics", icon: ClipboardList, url: "/academics" },
    { title: "Exams", icon: FileText, url: "/exams" },
    { title: "Finance", icon: DollarSign, url: "/finance" },
    { title: "Library", icon: BookOpen, url: "/library" },
    { title: "Transport", icon: Bus, url: "/transport" },
    { title: "Messages", icon: MessageSquare, url: "/messages" },
    { title: "Analytics", icon: BarChart3, url: "/analytics" },
    { title: "Settings", icon: Settings, url: "/settings" },
  ];

  const teacherItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "My Students", icon: GraduationCap, url: "/students" },
    { title: "Attendance", icon: Calendar, url: "/attendance" },
    { title: "Academics", icon: ClipboardList, url: "/academics" },
    { title: "Exams", icon: FileText, url: "/exams" },
    { title: "Library", icon: BookOpen, url: "/library" },
    { title: "Messages", icon: MessageSquare, url: "/messages" },
    { title: "Analytics", icon: BarChart3, url: "/analytics" },
    { title: "Settings", icon: Settings, url: "/settings" },
  ];

  const studentItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "My Courses", icon: BookOpen, url: "/academics" },
    { title: "Attendance", icon: Calendar, url: "/attendance" },
    { title: "Exams", icon: FileText, url: "/exams" },
    { title: "Library", icon: BookOpen, url: "/library" },
    { title: "Transport", icon: Bus, url: "/transport" },
    { title: "Messages", icon: MessageSquare, url: "/messages" },
    { title: "Settings", icon: Settings, url: "/settings" },
  ];

  const parentItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/" },
    { title: "Child's Progress", icon: BarChart3, url: "/analytics" },
    { title: "Attendance", icon: Calendar, url: "/attendance" },
    { title: "Academics", icon: ClipboardList, url: "/academics" },
    { title: "Exams", icon: FileText, url: "/exams" },
    { title: "Finance", icon: DollarSign, url: "/finance" },
    { title: "Library", icon: BookOpen, url: "/library" },
    { title: "Transport", icon: Bus, url: "/transport" },
    { title: "Messages", icon: MessageSquare, url: "/messages" },
    { title: "Settings", icon: Settings, url: "/settings" },
  ];

  switch (role) {
    case "admin":
      return adminItems;
    case "teacher":
      return teacherItems;
    case "student":
      return studentItems;
    case "parent":
      return parentItems;
    default:
      return adminItems;
  }
};

export const Sidebar = ({ userRole }: SidebarProps) => {
  const { open } = useSidebar();
  const menuItems = getMenuItems(userRole);

  return (
    <SidebarUI className={open ? "w-64" : "w-20"} collapsible="icon">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          {open && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">SIMS</h2>
              <p className="text-xs text-sidebar-foreground/60">School Management</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 uppercase text-xs font-semibold px-6 py-2">
            {open ? "Menu" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-6 py-3 transition-all duration-300 rounded-lg ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:translate-x-1"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      {open && <span className="transition-all duration-300">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUI>
  );
};
