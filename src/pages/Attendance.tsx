import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Download, CheckCircle, XCircle, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const attendanceData = [
  { id: 1, rollNo: "01", name: "John Smith", status: "present", time: "8:45 AM" },
  { id: 2, rollNo: "02", name: "Emma Johnson", status: "present", time: "8:42 AM" },
  { id: 3, rollNo: "03", name: "James Wilson", status: "absent", time: "-" },
  { id: 4, rollNo: "04", name: "Sarah Davis", status: "present", time: "8:50 AM" },
  { id: 5, rollNo: "05", name: "Olivia Taylor", status: "present", time: "8:38 AM" },
  { id: 6, rollNo: "06", name: "Michael Brown", status: "late", time: "9:15 AM" },
  { id: 7, rollNo: "07", name: "Emily Martinez", status: "present", time: "8:44 AM" },
  { id: 8, rollNo: "08", name: "Daniel Anderson", status: "present", time: "8:41 AM" },
];

const Attendance = () => {
  const [userRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedClass, setSelectedClass] = useState("10-A");

  const presentCount = attendanceData.filter((s) => s.status === "present").length;
  const absentCount = attendanceData.filter((s) => s.status === "absent").length;
  const lateCount = attendanceData.filter((s) => s.status === "late").length;
  const attendanceRate = ((presentCount + lateCount) / attendanceData.length * 100).toFixed(1);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-success-light text-success">Present</Badge>;
      case "absent":
        return <Badge className="bg-destructive/10 text-destructive">Absent</Badge>;
      case "late":
        return <Badge className="bg-warning-light text-warning">Late</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
            <p className="text-muted-foreground">Track and manage daily attendance records</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button className="gap-2">
              <CheckCircle className="h-4 w-4" />
              Mark Attendance
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Present</p>
                  <p className="text-3xl font-bold text-success">{presentCount}</p>
                </div>
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Absent</p>
                  <p className="text-3xl font-bold text-destructive">{absentCount}</p>
                </div>
                <XCircle className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Late</p>
                  <p className="text-3xl font-bold text-warning">{lateCount}</p>
                </div>
                <Clock className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Rate</p>
                  <p className="text-3xl font-bold text-primary">{attendanceRate}%</p>
                </div>
                <CalendarIcon className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Today's Attendance</CardTitle>
                <div className="flex gap-2">
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-A">Class 10-A</SelectItem>
                      <SelectItem value="10-B">Class 10-B</SelectItem>
                      <SelectItem value="9-A">Class 9-A</SelectItem>
                      <SelectItem value="11-A">Class 11-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <Checkbox checked={student.status === "present" || student.status === "late"} />
                      </TableCell>
                      <TableCell className="font-medium">{student.rollNo}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell className="text-muted-foreground">{student.time}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border pointer-events-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
