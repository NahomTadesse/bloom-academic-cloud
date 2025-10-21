import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, FileText } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Attendance Marked",
    description: "Class 10-A attendance completed",
    time: "5 minutes ago",
    type: "success",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Assignment Due",
    description: "Math Assignment #5 due tomorrow",
    time: "1 hour ago",
    type: "warning",
    icon: AlertCircle,
  },
  {
    id: 3,
    title: "New Grade Posted",
    description: "English Exam results published",
    time: "2 hours ago",
    type: "info",
    icon: FileText,
  },
  {
    id: 4,
    title: "Parent Meeting",
    description: "Scheduled for tomorrow at 3 PM",
    time: "3 hours ago",
    type: "info",
    icon: Clock,
  },
];

export const RecentActivity = () => {
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
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-0 border-border">
              <div className={`p-2 rounded-lg bg-muted ${getIconColor(activity.type)}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
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
