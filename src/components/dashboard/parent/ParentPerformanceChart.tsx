import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { subject: "Math", emma: 88, liam: 92 },
  { subject: "Science", emma: 92, liam: 85 },
  { subject: "English", emma: 90, liam: 88 },
  { subject: "History", emma: 85, liam: 90 },
  { subject: "Geography", emma: 87, liam: 86 },
];

export const ParentPerformanceChart = () => {
  return (
    <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Children's Performance Comparison</CardTitle>
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
            <Bar dataKey="emma" fill="hsl(var(--primary))" name="Emma" radius={[8, 8, 0, 0]} />
            <Bar dataKey="liam" fill="hsl(var(--success))" name="Liam" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
