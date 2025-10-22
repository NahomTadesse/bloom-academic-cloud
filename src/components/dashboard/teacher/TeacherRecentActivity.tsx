import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Users, Calendar } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Assignment Submitted",
    description: "15 students submitted Math Assignment #5",
    time: "10 minutes ago",
    type: "info",
    icon: FileText,
  },
  {
    id: 2,
    title: "Grading Pending",
    description: "Science Quiz - 24 submissions to review",
    time: "1 hour ago",
    type: "warning",
    icon: FileText,
  },
  {
    id: 3,
    title: "Parent Meeting",
    description: "Meeting with Sarah's parents at 3 PM",
    time: "2 hours ago",
    type: "info",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Class Completed",
    description: "10-A Math class attendance marked",
    time: "3 hours ago",
    type: "success",
    icon: Users,
  },
];

export const TeacherRecentActivity = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "success":
        return <Badge className="bg-success-light text-success">Completed</Badge>;
      case "warning":
        return <Badge className="bg-warning-light text-warning">Pending</Badge>;
      default:
        return <Badge variant="secondary">Info</Badge>;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-0 border-border transition-all duration-300 hover:bg-muted/50 hover:px-3 hover:-mx-3 rounded-lg">
              <div className={`p-2 rounded-lg bg-muted ${getIconColor(activity.type)} transition-transform duration-300 hover:scale-110`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground transition-colors duration-300">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  {getTypeBadge(activity.type)}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
