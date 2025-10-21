import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, FileText, Plus, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const subjects = [
  { id: 1, name: "Mathematics", code: "MATH101", teacher: "Jennifer Lee", students: 45, hours: 5 },
  { id: 2, name: "Physics", code: "PHY101", teacher: "Michael Chen", students: 42, hours: 4 },
  { id: 3, name: "Chemistry", code: "CHEM101", teacher: "Sarah Williams", students: 40, hours: 4 },
  { id: 4, name: "English", code: "ENG101", teacher: "Robert Anderson", students: 48, hours: 4 },
  { id: 5, name: "Biology", code: "BIO101", teacher: "Emily Martinez", students: 38, hours: 4 },
];

const assignments = [
  { id: 1, title: "Algebra Problem Set", subject: "Mathematics", dueDate: "2025-11-01", submitted: 38, total: 45, status: "active" },
  { id: 2, title: "Newton's Laws Essay", subject: "Physics", dueDate: "2025-10-28", submitted: 40, total: 42, status: "active" },
  { id: 3, title: "Chemical Reactions Lab", subject: "Chemistry", dueDate: "2025-10-30", submitted: 35, total: 40, status: "active" },
  { id: 4, title: "Shakespeare Analysis", subject: "English", dueDate: "2025-11-05", submitted: 42, total: 48, status: "active" },
];

const Academics = () => {
  const [userRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Academic Management</h1>
            <p className="text-muted-foreground">Manage curriculum, subjects, and assignments</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Subject
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Subjects</p>
                  <p className="text-3xl font-bold">32</p>
                </div>
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Assignments</p>
                  <p className="text-3xl font-bold text-warning">48</p>
                </div>
                <FileText className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Classes Today</p>
                  <p className="text-3xl font-bold text-success">24</p>
                </div>
                <Calendar className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Hours/Week</p>
                  <p className="text-3xl font-bold">180</p>
                </div>
                <Clock className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="subjects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>All Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Hours/Week</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjects.map((subject) => (
                      <TableRow key={subject.id}>
                        <TableCell className="font-medium">{subject.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{subject.code}</Badge>
                        </TableCell>
                        <TableCell>{subject.teacher}</TableCell>
                        <TableCell>{subject.students}</TableCell>
                        <TableCell>{subject.hours}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Assignments</CardTitle>
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Assignment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="font-medium">{assignment.title}</TableCell>
                        <TableCell>{assignment.subject}</TableCell>
                        <TableCell>{assignment.dueDate}</TableCell>
                        <TableCell>
                          <span className="text-muted-foreground">
                            {assignment.submitted}/{assignment.total}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-success-light text-success">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Review
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="syllabus">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Syllabus Management</h3>
                <p className="text-muted-foreground">View and manage curriculum syllabus for all subjects</p>
                <Button className="mt-4">Upload Syllabus</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timetable">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Timetable Management</h3>
                <p className="text-muted-foreground">Create and manage class schedules and timetables</p>
                <Button className="mt-4">Create Timetable</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Academics;
