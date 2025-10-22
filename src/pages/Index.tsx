import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TeacherAttendanceChart } from "@/components/dashboard/teacher/TeacherAttendanceChart";
import { TeacherPerformanceChart } from "@/components/dashboard/teacher/TeacherPerformanceChart";
import { TeacherRecentActivity } from "@/components/dashboard/teacher/TeacherRecentActivity";
import { StudentPerformanceChart } from "@/components/dashboard/student/StudentPerformanceChart";
import { StudentGradesChart } from "@/components/dashboard/student/StudentGradesChart";
import { StudentRecentActivity } from "@/components/dashboard/student/StudentRecentActivity";
import { ParentPerformanceChart } from "@/components/dashboard/parent/ParentPerformanceChart";
import { ParentAttendanceChart } from "@/components/dashboard/parent/ParentAttendanceChart";
import { ParentRecentActivity } from "@/components/dashboard/parent/ParentRecentActivity";
import { Users, GraduationCap, Calendar, DollarSign, TrendingUp, BookOpen } from "lucide-react";

const Index = () => {
  const { userRole, setUserRole } = useRole();

  const getStatsForRole = () => {
    switch (userRole) {
      case "admin":
        return [
          { title: "Total Students", value: "1,248", change: "+5.2% from last month", changeType: "positive" as const, icon: GraduationCap, iconColor: "bg-primary" },
          { title: "Total Staff", value: "156", change: "+2.1% from last month", changeType: "positive" as const, icon: Users, iconColor: "bg-success" },
          { title: "Attendance Rate", value: "92.4%", change: "+1.8% from last week", changeType: "positive" as const, icon: Calendar, iconColor: "bg-warning" },
          { title: "Fee Collection", value: "$124.5K", change: "+12.3% from last month", changeType: "positive" as const, icon: DollarSign, iconColor: "bg-accent" },
        ];
      case "teacher":
        return [
          { title: "My Classes", value: "6", change: "Active this semester", changeType: "neutral" as const, icon: BookOpen, iconColor: "bg-primary" },
          { title: "Total Students", value: "180", change: "Across all classes", changeType: "neutral" as const, icon: GraduationCap, iconColor: "bg-success" },
          { title: "Attendance Today", value: "94.2%", change: "+2.1% from yesterday", changeType: "positive" as const, icon: Calendar, iconColor: "bg-warning" },
          { title: "Pending Grading", value: "24", change: "Assignments to review", changeType: "neutral" as const, icon: TrendingUp, iconColor: "bg-accent" },
        ];
      case "student":
        return [
          { title: "Enrolled Courses", value: "8", change: "This semester", changeType: "neutral" as const, icon: BookOpen, iconColor: "bg-primary" },
          { title: "Attendance", value: "96.5%", change: "+1.2% from last month", changeType: "positive" as const, icon: Calendar, iconColor: "bg-success" },
          { title: "Overall GPA", value: "3.85", change: "+0.15 from last term", changeType: "positive" as const, icon: TrendingUp, iconColor: "bg-warning" },
          { title: "Pending Assignments", value: "3", change: "Due this week", changeType: "neutral" as const, icon: GraduationCap, iconColor: "bg-accent" },
        ];
      case "parent":
        return [
          { title: "Children Enrolled", value: "2", change: "Active students", changeType: "neutral" as const, icon: GraduationCap, iconColor: "bg-primary" },
          { title: "Avg. Attendance", value: "94.8%", change: "This month", changeType: "positive" as const, icon: Calendar, iconColor: "bg-success" },
          { title: "Avg. Performance", value: "B+", change: "This semester", changeType: "positive" as const, icon: TrendingUp, iconColor: "bg-warning" },
          { title: "Pending Fees", value: "$2,400", change: "Due by end of month", changeType: "neutral" as const, icon: DollarSign, iconColor: "bg-accent" },
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  return (
    <DashboardLayout userRole={userRole} onRoleChange={setUserRole}>
      <div className="space-y-6 animate-fade-in">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {userRole === "admin" && "Administrator Dashboard"}
            {userRole === "teacher" && "Teacher Dashboard"}
            {userRole === "student" && "Student Dashboard"}
            {userRole === "parent" && "Parent Dashboard"}
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your school today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {userRole === "admin" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <AttendanceChart />
              <PerformanceChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="lg:col-span-2">
                <PerformanceChart />
              </div>
              <RecentActivity />
            </div>
          </>
        )}

        {userRole === "teacher" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <TeacherAttendanceChart />
              <TeacherPerformanceChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="lg:col-span-2">
                <TeacherPerformanceChart />
              </div>
              <TeacherRecentActivity />
            </div>
          </>
        )}

        {userRole === "student" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <StudentPerformanceChart />
              <StudentGradesChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="lg:col-span-2">
                <StudentGradesChart />
              </div>
              <StudentRecentActivity />
            </div>
          </>
        )}

        {userRole === "parent" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <ParentPerformanceChart />
              <ParentAttendanceChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="lg:col-span-2">
                <ParentPerformanceChart />
              </div>
              <ParentRecentActivity />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Index;
