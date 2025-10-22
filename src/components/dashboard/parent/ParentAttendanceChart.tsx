import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { week: "Week 1", emma: 100, liam: 95 },
  { week: "Week 2", emma: 95, liam: 100 },
  { week: "Week 3", emma: 100, liam: 90 },
  { week: "Week 4", emma: 95, liam: 95 },
];

export const ParentAttendanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Children's Attendance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" domain={[80, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="emma" stroke="hsl(var(--primary))" strokeWidth={2} name="Emma" />
            <Line type="monotone" dataKey="liam" stroke="hsl(var(--success))" strokeWidth={2} name="Liam" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
