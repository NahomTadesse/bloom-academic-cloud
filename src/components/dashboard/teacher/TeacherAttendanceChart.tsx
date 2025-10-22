import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Week 1", classA: 94, classB: 92, classC: 89 },
  { name: "Week 2", classA: 96, classB: 90, classC: 91 },
  { name: "Week 3", classA: 93, classB: 94, classC: 88 },
  { name: "Week 4", classA: 95, classB: 91, classC: 90 },
];

export const TeacherAttendanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Class Attendance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="classA" stroke="hsl(var(--primary))" strokeWidth={2} name="Class 10-A" />
            <Line type="monotone" dataKey="classB" stroke="hsl(var(--success))" strokeWidth={2} name="Class 10-B" />
            <Line type="monotone" dataKey="classC" stroke="hsl(var(--accent))" strokeWidth={2} name="Class 9-A" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
