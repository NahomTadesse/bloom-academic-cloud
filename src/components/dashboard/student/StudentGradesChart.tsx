import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { subject: "Math", myGrade: 92, classAvg: 85 },
  { subject: "Science", myGrade: 88, classAvg: 82 },
  { subject: "English", myGrade: 95, classAvg: 87 },
  { subject: "History", myGrade: 90, classAvg: 86 },
  { subject: "Geography", myGrade: 87, classAvg: 83 },
];

export const StudentGradesChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Subject-wise Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="myGrade" fill="hsl(var(--primary))" name="My Grade" radius={[8, 8, 0, 0]} />
            <Bar dataKey="classAvg" fill="hsl(var(--muted))" name="Class Average" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
