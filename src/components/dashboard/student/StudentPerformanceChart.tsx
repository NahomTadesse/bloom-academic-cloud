import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", gpa: 3.6, classAvg: 3.4 },
  { month: "Feb", gpa: 3.7, classAvg: 3.5 },
  { month: "Mar", gpa: 3.8, classAvg: 3.5 },
  { month: "Apr", gpa: 3.85, classAvg: 3.6 },
];

export const StudentPerformanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">My Performance Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" domain={[3.0, 4.0]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="gpa" stroke="hsl(var(--primary))" strokeWidth={2} name="My GPA" />
            <Line type="monotone" dataKey="classAvg" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" name="Class Average" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
