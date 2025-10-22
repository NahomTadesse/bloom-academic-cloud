import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Mon", present: 92, absent: 8 },
  { name: "Tue", present: 95, absent: 5 },
  { name: "Wed", present: 88, absent: 12 },
  { name: "Thu", present: 94, absent: 6 },
  { name: "Fri", present: 91, absent: 9 },
  { name: "Sat", present: 89, absent: 11 },
];

export const AttendanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Weekly Attendance</CardTitle>
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
            <Line
              type="monotone"
              dataKey="present"
              stroke="hsl(var(--success))"
              strokeWidth={2}
              name="Present %"
            />
            <Line
              type="monotone"
              dataKey="absent"
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              name="Absent %"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
