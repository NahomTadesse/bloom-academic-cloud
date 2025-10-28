// import { useRole } from "@/contexts/RoleContext";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { BookOpen, Calendar, FileText, Plus, Clock } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const subjects = [
//   { id: 1, name: "Mathematics", code: "MATH101", teacher: "Jennifer Lee", students: 45, hours: 5 },
//   { id: 2, name: "Physics", code: "PHY101", teacher: "Michael Chen", students: 42, hours: 4 },
//   { id: 3, name: "Chemistry", code: "CHEM101", teacher: "Sarah Williams", students: 40, hours: 4 },
//   { id: 4, name: "English", code: "ENG101", teacher: "Robert Anderson", students: 48, hours: 4 },
//   { id: 5, name: "Biology", code: "BIO101", teacher: "Emily Martinez", students: 38, hours: 4 },
// ];

// const assignments = [
//   { id: 1, title: "Algebra Problem Set", subject: "Mathematics", dueDate: "2025-11-01", submitted: 38, total: 45, status: "active" },
//   { id: 2, title: "Newton's Laws Essay", subject: "Physics", dueDate: "2025-10-28", submitted: 40, total: 42, status: "active" },
//   { id: 3, title: "Chemical Reactions Lab", subject: "Chemistry", dueDate: "2025-10-30", submitted: 35, total: 40, status: "active" },
//   { id: 4, title: "Shakespeare Analysis", subject: "English", dueDate: "2025-11-05", submitted: 42, total: 48, status: "active" },
// ];

// const Academics = () => {
//   const { userRole, setUserRole } = useRole();

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Academic Management</h1>
//             <p className="text-muted-foreground">Manage curriculum, subjects, and assignments</p>
//           </div>
//           <Button className="gap-2">
//             <Plus className="h-4 w-4" />
//             Add Subject
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Subjects</p>
//                   <p className="text-3xl font-bold">32</p>
//                 </div>
//                 <BookOpen className="h-10 w-10 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Active Assignments</p>
//                   <p className="text-3xl font-bold text-warning">48</p>
//                 </div>
//                 <FileText className="h-10 w-10 text-warning" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Classes Today</p>
//                   <p className="text-3xl font-bold text-success">24</p>
//                 </div>
//                 <Calendar className="h-10 w-10 text-success" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Hours/Week</p>
//                   <p className="text-3xl font-bold">180</p>
//                 </div>
//                 <Clock className="h-10 w-10 text-accent" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="subjects" className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="subjects">Subjects</TabsTrigger>
//             <TabsTrigger value="assignments">Assignments</TabsTrigger>
//             <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
//             <TabsTrigger value="timetable">Timetable</TabsTrigger>
//           </TabsList>

//           <TabsContent value="subjects" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle>All Subjects</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Subject Name</TableHead>
//                       <TableHead>Code</TableHead>
//                       <TableHead>Teacher</TableHead>
//                       <TableHead>Students</TableHead>
//                       <TableHead>Hours/Week</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {subjects.map((subject) => (
//                       <TableRow key={subject.id}>
//                         <TableCell className="font-medium">{subject.name}</TableCell>
//                         <TableCell>
//                           <Badge variant="secondary">{subject.code}</Badge>
//                         </TableCell>
//                         <TableCell>{subject.teacher}</TableCell>
//                         <TableCell>{subject.students}</TableCell>
//                         <TableCell>{subject.hours}</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View Details
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="assignments" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle>Active Assignments</CardTitle>
//                   <Button size="sm" className="gap-2">
//                     <Plus className="h-4 w-4" />
//                     New Assignment
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Assignment Title</TableHead>
//                       <TableHead>Subject</TableHead>
//                       <TableHead>Due Date</TableHead>
//                       <TableHead>Submissions</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {assignments.map((assignment) => (
//                       <TableRow key={assignment.id}>
//                         <TableCell className="font-medium">{assignment.title}</TableCell>
//                         <TableCell>{assignment.subject}</TableCell>
//                         <TableCell>{assignment.dueDate}</TableCell>
//                         <TableCell>
//                           <span className="text-muted-foreground">
//                             {assignment.submitted}/{assignment.total}
//                           </span>
//                         </TableCell>
//                         <TableCell>
//                           <Badge className="bg-success-light text-success">Active</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             Review
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="syllabus">
//             <Card className="shadow-card">
//               <CardContent className="p-12 text-center">
//                 <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
//                 <h3 className="text-xl font-semibold mb-2">Syllabus Management</h3>
//                 <p className="text-muted-foreground">View and manage curriculum syllabus for all subjects</p>
//                 <Button className="mt-4">Upload Syllabus</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="timetable">
//             <Card className="shadow-card">
//               <CardContent className="p-12 text-center">
//                 <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
//                 <h3 className="text-xl font-semibold mb-2">Timetable Management</h3>
//                 <p className="text-muted-foreground">Create and manage class schedules and timetables</p>
//                 <Button className="mt-4">Create Timetable</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Academics;



import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calendar,
  FileText,
  Plus,
  Clock,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: number;
  name: string;
  code: string;
  teacher: string;
  students: number;
  hours: number;
}

interface Assignment {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  submitted: number;
  total: number;
  status: "active" | "completed";
}

const Academics = () => {
  const { userRole } = useRole();
  const { toast } = useToast();

  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: "Mathematics", code: "MATH101", teacher: "Jennifer Lee", students: 45, hours: 5 },
    { id: 2, name: "Physics", code: "PHY101", teacher: "Michael Chen", students: 42, hours: 4 },
    { id: 3, name: "Chemistry", code: "CHEM101", teacher: "Sarah Williams", students: 40, hours: 4 },
    { id: 4, name: "English", code: "ENG101", teacher: "Robert Anderson", students: 48, hours: 4 },
    { id: 5, name: "Biology", code: "BIO101", teacher: "Emily Martinez", students: 38, hours: 4 },
  ]);

  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, title: "Algebra Problem Set", subject: "Mathematics", dueDate: "2025-11-01", submitted: 38, total: 45, status: "active" },
    { id: 2, title: "Newton's Laws Essay", subject: "Physics", dueDate: "2025-10-28", submitted: 40, total: 42, status: "active" },
    { id: 3, title: "Chemical Reactions Lab", subject: "Chemistry", dueDate: "2025-10-30", submitted: 35, total: 40, status: "active" },
    { id: 4, title: "Shakespeare Analysis", subject: "English", dueDate: "2025-11-05", submitted: 42, total: 48, status: "active" },
  ]);

  // Modal states
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [isNewAssignmentOpen, setIsNewAssignmentOpen] = useState(false);

  // Form states
  const [subjectForm, setSubjectForm] = useState({
    name: "",
    code: "",
    teacher: "",
    students: "",
    hours: "",
  });

  const [assignmentForm, setAssignmentForm] = useState({
    title: "",
    subject: "",
    dueDate: "",
    totalStudents: "",
  });

  // Handle Add Subject
  const handleAddSubject = () => {
    setIsAddSubjectOpen(true);
  };

  const handleSubmitSubject = () => {
    if (!subjectForm.name || !subjectForm.code || !subjectForm.teacher || !subjectForm.students || !subjectForm.hours) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const newSubject: Subject = {
      id: subjects.length + 1,
      name: subjectForm.name,
      code: subjectForm.code.toUpperCase(),
      teacher: subjectForm.teacher,
      students: parseInt(subjectForm.students),
      hours: parseInt(subjectForm.hours),
    };

    setSubjects([newSubject, ...subjects]);

    toast({
      title: "Subject Added",
      description: `${newSubject.name} (${newSubject.code}) has been added.`,
    });

    setSubjectForm({ name: "", code: "", teacher: "", students: "", hours: "" });
    setIsAddSubjectOpen(false);
  };

  // Handle New Assignment
  const handleNewAssignment = () => {
    setIsNewAssignmentOpen(true);
  };

  const handleSubmitAssignment = () => {
    if (!assignmentForm.title || !assignmentForm.subject || !assignmentForm.dueDate || !assignmentForm.totalStudents) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const total = parseInt(assignmentForm.totalStudents);
    const newAssignment: Assignment = {
      id: assignments.length + 1,
      title: assignmentForm.title,
      subject: assignmentForm.subject,
      dueDate: assignmentForm.dueDate,
      submitted: 0,
      total,
      status: "active",
    };

    setAssignments([newAssignment, ...assignments]);

    toast({
      title: "Assignment Created",
      description: `"${newAssignment.title}" for ${newAssignment.subject} is now active.`,
    });

    setAssignmentForm({ title: "", subject: "", dueDate: "", totalStudents: "" });
    setIsNewAssignmentOpen(false);
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Academic Management</h1>
            <p className="text-muted-foreground">Manage curriculum, subjects, and assignments</p>
          </div>
          <Button onClick={handleAddSubject} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Subject
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Subjects</p>
                  <p className="text-3xl font-bold">{subjects.length}</p>
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
                  <p className="text-3xl font-bold text-warning">
                    {assignments.filter((a) => a.status === "active").length}
                  </p>
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
                  <p className="text-3xl font-bold">
                    {subjects.reduce((sum, s) => sum + s.hours, 0)}
                  </p>
                </div>
                <Clock className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="subjects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          {/* Subjects Tab */}
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

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Assignments</CardTitle>
                  <Button size="sm" onClick={handleNewAssignment} className="gap-2">
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
                          <Badge className="bg-success-light text-success">
                            {assignment.status === "active" ? "Active" : "Completed"}
                          </Badge>
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

          {/* Syllabus Tab */}
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

          {/* Timetable Tab */}
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

        {/* Add Subject Modal */}
        <Dialog open={isAddSubjectOpen} onOpenChange={setIsAddSubjectOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
              <DialogDescription>
                Create a new subject with assigned teacher and schedule.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subjectName">Subject Name *</Label>
                    <Input
                      id="subjectName"
                      value={subjectForm.name}
                      onChange={(e) => setSubjectForm({ ...subjectForm, name: e.target.value })}
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subjectCode">Subject Code *</Label>
                    <Input
                      id="subjectCode"
                      value={subjectForm.code}
                      onChange={(e) => setSubjectForm({ ...subjectForm, code: e.target.value })}
                      placeholder="e.g., CS101"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teacher">Teacher *</Label>
                    <Input
                      id="teacher"
                      value={subjectForm.teacher}
                      onChange={(e) => setSubjectForm({ ...subjectForm, teacher: e.target.value })}
                      placeholder="e.g., John Doe"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="students">Number of Students *</Label>
                    <Input
                      id="students"
                      type="number"
                      min="1"
                      value={subjectForm.students}
                      onChange={(e) => setSubjectForm({ ...subjectForm, students: e.target.value })}
                      placeholder="e.g., 35"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hours">Hours per Week *</Label>
                    <Input
                      id="hours"
                      type="number"
                      min="1"
                      max="10"
                      value={subjectForm.hours}
                      onChange={(e) => setSubjectForm({ ...subjectForm, hours: e.target.value })}
                      placeholder="e.g., 4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddSubjectOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitSubject}>Add Subject</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* New Assignment Modal */}
        <Dialog open={isNewAssignmentOpen} onOpenChange={setIsNewAssignmentOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
              <DialogDescription>
                Set up a new assignment for students to complete.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="assignmentTitle">Assignment Title *</Label>
                    <Input
                      id="assignmentTitle"
                      value={assignmentForm.title}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, title: e.target.value })}
                      placeholder="e.g., Midterm Project"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subjectSelect">Subject *</Label>
                    <select
                      id="subjectSelect"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={assignmentForm.subject}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, subject: e.target.value })}
                    >
                      <option value="">Select subject</option>
                      {subjects.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date *</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={assignmentForm.dueDate}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, dueDate: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalStudents">Total Students *</Label>
                    <Input
                      id="totalStudents"
                      type="number"
                      min="1"
                      value={assignmentForm.totalStudents}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, totalStudents: e.target.value })}
                      placeholder="e.g., 40"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              {assignmentForm.title && assignmentForm.subject && assignmentForm.dueDate && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Assignment Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>{assignmentForm.title}</strong> for{" "}
                    <strong>{assignmentForm.subject}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Due: {new Date(assignmentForm.dueDate).toLocaleDateString()} · 0/{assignmentForm.totalStudents} submitted
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsNewAssignmentOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitAssignment}>Create Assignment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Academics;