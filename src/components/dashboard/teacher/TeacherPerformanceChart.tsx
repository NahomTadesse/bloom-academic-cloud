import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { class: "10-A", math: 85, science: 88, english: 82 },
  { class: "10-B", math: 78, science: 82, english: 86 },
  { class: "9-A", math: 82, science: 79, english: 84 },
];

export const TeacherPerformanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Class Performance by Subject</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="class" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="math" fill="hsl(var(--primary))" name="Math" radius={[8, 8, 0, 0]} />
            <Bar dataKey="science" fill="hsl(var(--success))" name="Science" radius={[8, 8, 0, 0]} />
            <Bar dataKey="english" fill="hsl(var(--accent))" name="English" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
