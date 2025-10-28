// import { useRole } from "@/contexts/RoleContext";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { FileText, Calendar, TrendingUp, Plus, Download } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Progress } from "@/components/ui/progress";

// const upcomingExams = [
//   { id: 1, subject: "Mathematics", class: "10-A", date: "2025-11-15", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
//   { id: 2, subject: "Physics", class: "10-A", date: "2025-11-17", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
//   { id: 3, subject: "Chemistry", class: "10-A", date: "2025-11-19", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
//   { id: 4, subject: "English", class: "10-A", date: "2025-11-21", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
// ];

// const results = [
//   { id: 1, student: "John Smith", subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A", percentage: 85 },
//   { id: 2, student: "Emma Johnson", subject: "Mathematics", marks: 92, totalMarks: 100, grade: "A+", percentage: 92 },
//   { id: 3, student: "James Wilson", subject: "Mathematics", marks: 78, totalMarks: 100, grade: "B+", percentage: 78 },
//   { id: 4, student: "Sarah Davis", subject: "Mathematics", marks: 95, totalMarks: 100, grade: "A+", percentage: 95 },
//   { id: 5, student: "Olivia Taylor", subject: "Mathematics", marks: 88, totalMarks: 100, grade: "A", percentage: 88 },
// ];

// const Exams = () => {
//   const { userRole, setUserRole } = useRole();

//   const getGradeBadge = (grade: string) => {
//     const colors: Record<string, string> = {
//       "A+": "bg-success-light text-success",
//       "A": "bg-primary/10 text-primary",
//       "B+": "bg-warning-light text-warning",
//       "B": "bg-warning-light text-warning",
//     };
//     return <Badge className={colors[grade] || "bg-secondary"}>{grade}</Badge>;
//   };

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Exam Management</h1>
//             <p className="text-muted-foreground">Schedule exams, manage grading, and publish results</p>
//           </div>
//           <Button className="gap-2">
//             <Plus className="h-4 w-4" />
//             Schedule Exam
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Upcoming Exams</p>
//                   <p className="text-3xl font-bold">12</p>
//                 </div>
//                 <Calendar className="h-10 w-10 text-warning" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Completed</p>
//                   <p className="text-3xl font-bold text-success">28</p>
//                 </div>
//                 <FileText className="h-10 w-10 text-success" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Avg. Score</p>
//                   <p className="text-3xl font-bold text-primary">85.2%</p>
//                 </div>
//                 <TrendingUp className="h-10 w-10 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Pass Rate</p>
//                   <p className="text-3xl font-bold">94.8%</p>
//                 </div>
//                 <TrendingUp className="h-10 w-10 text-accent" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="upcoming" className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
//             <TabsTrigger value="results">Results</TabsTrigger>
//             <TabsTrigger value="reports">Report Cards</TabsTrigger>
//             <TabsTrigger value="analytics">Analytics</TabsTrigger>
//           </TabsList>

//           <TabsContent value="upcoming" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle>Scheduled Exams</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Subject</TableHead>
//                       <TableHead>Class</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Time</TableHead>
//                       <TableHead>Duration</TableHead>
//                       <TableHead>Total Marks</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {upcomingExams.map((exam) => (
//                       <TableRow key={exam.id}>
//                         <TableCell className="font-medium">{exam.subject}</TableCell>
//                         <TableCell>{exam.class}</TableCell>
//                         <TableCell>{exam.date}</TableCell>
//                         <TableCell>{exam.time}</TableCell>
//                         <TableCell>{exam.duration}</TableCell>
//                         <TableCell>{exam.totalMarks}</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             Edit
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="results" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle>Recent Results - Mathematics</CardTitle>
//                   <Button variant="outline" size="sm" className="gap-2">
//                     <Download className="h-4 w-4" />
//                     Export
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Student Name</TableHead>
//                       <TableHead>Subject</TableHead>
//                       <TableHead>Marks Obtained</TableHead>
//                       <TableHead>Percentage</TableHead>
//                       <TableHead>Grade</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {results.map((result) => (
//                       <TableRow key={result.id}>
//                         <TableCell className="font-medium">{result.student}</TableCell>
//                         <TableCell>{result.subject}</TableCell>
//                         <TableCell>
//                           {result.marks}/{result.totalMarks}
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex items-center gap-2">
//                             <Progress value={result.percentage} className="w-20" />
//                             <span className="text-sm font-medium">{result.percentage}%</span>
//                           </div>
//                         </TableCell>
//                         <TableCell>{getGradeBadge(result.grade)}</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="reports">
//             <Card className="shadow-card">
//               <CardContent className="p-12 text-center">
//                 <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
//                 <h3 className="text-xl font-semibold mb-2">Report Card Generation</h3>
//                 <p className="text-muted-foreground mb-4">Generate and download student report cards</p>
//                 <Button>Generate Reports</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="analytics">
//             <Card className="shadow-card">
//               <CardContent className="p-12 text-center">
//                 <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
//                 <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
//                 <p className="text-muted-foreground mb-4">View detailed analytics and trends</p>
//                 <Button>View Analytics</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Exams;



import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  TrendingUp,
  Plus,
  Download,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
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

interface Exam {
  id: number;
  subject: string;
  class: string;
  date: string;
  time: string;
  duration: string;
  totalMarks: number;
}

interface Result {
  id: number;
  student: string;
  subject: string;
  marks: number;
  totalMarks: number;
  grade: string;
  percentage: number;
}

const Exams = () => {
  const { userRole } = useRole();
  const { toast } = useToast();

  const [upcomingExams, setUpcomingExams] = useState<Exam[]>([
    { id: 1, subject: "Mathematics", class: "10-A", date: "2025-11-15", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
    { id: 2, subject: "Physics", class: "10-A", date: "2025-11-17", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
    { id: 3, subject: "Chemistry", class: "10-A", date: "2025-11-19", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
    { id: 4, subject: "English", class: "10-A", date: "2025-11-21", time: "9:00 AM", duration: "3 hours", totalMarks: 100 },
  ]);

  const results: Result[] = [
    { id: 1, student: "John Smith", subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A", percentage: 85 },
    { id: 2, student: "Emma Johnson", subject: "Mathematics", marks: 92, totalMarks: 100, grade: "A+", percentage: 92 },
    { id: 3, student: "James Wilson", subject: "Mathematics", marks: 78, totalMarks: 100, grade: "B+", percentage: 78 },
    { id: 4, student: "Sarah Davis", subject: "Mathematics", marks: 95, totalMarks: 100, grade: "A+", percentage: 95 },
    { id: 5, student: "Olivia Taylor", subject: "Mathematics", marks: 88, totalMarks: 100, grade: "A", percentage: 88 },
  ];

  // Modal state
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  // Form state
  const [examForm, setExamForm] = useState({
    subject: "",
    class: "",
    date: "",
    time: "",
    duration: "",
    totalMarks: "",
  });

  // Grade badge helper
  const getGradeBadge = (grade: string) => {
    const colors: Record<string, string> = {
      "A+": "bg-success-light text-success",
      A: "bg-primary/10 text-primary",
      "B+": "bg-warning-light text-warning",
      B: "bg-warning-light text-warning",
    };
    return <Badge className={colors[grade] || "bg-secondary"}>{grade}</Badge>;
  };

  // Handle Schedule Exam
  const handleScheduleExam = () => {
    setIsScheduleOpen(true);
  };

  const handleSubmitExam = () => {
    if (
      !examForm.subject ||
      !examForm.class ||
      !examForm.date ||
      !examForm.time ||
      !examForm.duration ||
      !examForm.totalMarks
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const newExam: Exam = {
      id: upcomingExams.length + 1,
      subject: examForm.subject,
      class: examForm.class,
      date: examForm.date,
      time: examForm.time,
      duration: examForm.duration,
      totalMarks: parseInt(examForm.totalMarks),
    };

    setUpcomingExams([newExam, ...upcomingExams]);

    toast({
      title: "Exam Scheduled",
      description: `${newExam.subject} for ${newExam.class} on ${newExam.date} at ${newExam.time}.`,
    });

    setExamForm({
      subject: "",
      class: "",
      date: "",
      time: "",
      duration: "",
      totalMarks: "",
    });
    setIsScheduleOpen(false);
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Exam Management</h1>
            <p className="text-muted-foreground">Schedule exams, manage grading, and publish results</p>
          </div>
          <Button onClick={handleScheduleExam} className="gap-2">
            <Plus className="h-4 w-4" />
            Schedule Exam
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Upcoming Exams</p>
                  <p className="text-3xl font-bold">{upcomingExams.length}</p>
                </div>
                <Calendar className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <p className="text-3xl font-bold text-success">28</p>
                </div>
                <FileText className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg. Score</p>
                  <p className="text-3xl font-bold text-primary">85.2%</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pass Rate</p>
                  <p className="text-3xl font-bold">94.8%</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="reports">Report Cards</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Upcoming Exams */}
          <TabsContent value="upcoming" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Scheduled Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Total Marks</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingExams.map((exam) => (
                      <TableRow key={exam.id}>
                        <TableCell className="font-medium">{exam.subject}</TableCell>
                        <TableCell>{exam.class}</TableCell>
                        <TableCell>{exam.date}</TableCell>
                        <TableCell>{exam.time}</TableCell>
                        <TableCell>{exam.duration}</TableCell>
                        <TableCell>{exam.totalMarks}</TableCell>
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
          </TabsContent>

          {/* Results */}
          <TabsContent value="results" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Results - Mathematics</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Marks Obtained</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.student}</TableCell>
                        <TableCell>{result.subject}</TableCell>
                        <TableCell>
                          {result.marks}/{result.totalMarks}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={result.percentage} className="w-20" />
                            <span className="text-sm font-medium">{result.percentage}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{getGradeBadge(result.grade)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Report Cards */}
          <TabsContent value="reports">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Report Card Generation</h3>
                <p className="text-muted-foreground mb-4">Generate and download student report cards</p>
                <Button>Generate Reports</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground mb-4">View detailed analytics and trends</p>
                <Button>View Analytics</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Schedule Exam Modal */}
        <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Schedule New Exam</DialogTitle>
              <DialogDescription>
                Set up a new exam with subject, class, and timing.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={examForm.subject}
                      onChange={(e) => setExamForm({ ...examForm, subject: e.target.value })}
                      placeholder="e.g., Mathematics"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class">Class *</Label>
                    <Input
                      id="class"
                      value={examForm.class}
                      onChange={(e) => setExamForm({ ...examForm, class: e.target.value })}
                      placeholder="e.g., 10-A"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={examForm.date}
                      onChange={(e) => setExamForm({ ...examForm, date: e.target.value })}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={examForm.time}
                      onChange={(e) => setExamForm({ ...examForm, time: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration *</Label>
                    <Input
                      id="duration"
                      value={examForm.duration}
                      onChange={(e) => setExamForm({ ...examForm, duration: e.target.value })}
                      placeholder="e.g., 3 hours"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalMarks">Total Marks *</Label>
                    <Input
                      id="totalMarks"
                      type="number"
                      min="1"
                      value={examForm.totalMarks}
                      onChange={(e) => setExamForm({ ...examForm, totalMarks: e.target.value })}
                      placeholder="e.g., 100"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              {examForm.subject && examForm.class && examForm.date && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Exam Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>{examForm.subject}</strong> for <strong>{examForm.class}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {examForm.date} at {examForm.time || "TBD"} · {examForm.duration || "TBD"} · {examForm.totalMarks || "TBD"} marks
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsScheduleOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitExam}>Schedule Exam</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Exams;