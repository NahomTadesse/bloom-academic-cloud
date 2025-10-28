// import { useState } from "react";
// import { useRole } from "@/contexts/RoleContext";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Search, Plus, Download, Filter, Eye, Edit, Mail, Phone } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// const staff = [
//   { id: "TCH001", name: "Dr. Robert Anderson", role: "Principal", department: "Administration", email: "robert.a@school.com", phone: "+1 234 567 8901", status: "active", experience: "15 years" },
//   { id: "TCH002", name: "Jennifer Lee", role: "Math Teacher", department: "Mathematics", email: "jennifer.l@school.com", phone: "+1 234 567 8902", status: "active", experience: "8 years" },
//   { id: "TCH003", name: "Michael Chen", role: "Science Teacher", department: "Science", email: "michael.c@school.com", phone: "+1 234 567 8903", status: "active", experience: "10 years" },
//   { id: "TCH004", name: "Sarah Williams", role: "English Teacher", department: "Languages", email: "sarah.w@school.com", phone: "+1 234 567 8904", status: "active", experience: "6 years" },
//   { id: "STF001", name: "David Brown", role: "Librarian", department: "Library", email: "david.b@school.com", phone: "+1 234 567 8905", status: "active", experience: "12 years" },
//   { id: "STF002", name: "Emily Martinez", role: "Admin Officer", department: "Administration", email: "emily.m@school.com", phone: "+1 234 567 8906", status: "active", experience: "5 years" },
//   { id: "TCH005", name: "James Wilson", role: "PE Teacher", department: "Physical Education", email: "james.w@school.com", phone: "+1 234 567 8907", status: "active", experience: "7 years" },
// ];

// const Staff = () => {
//   const { userRole, setUserRole } = useRole();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredStaff = staff.filter(
//     (member) =>
//       member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       member.role.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();
//   };

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
//             <p className="text-muted-foreground">Manage teaching and non-teaching staff records</p>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" className="gap-2">
//               <Download className="h-4 w-4" />
//               Export
//             </Button>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               Add Staff
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <p className="text-sm text-muted-foreground mb-1">Total Staff</p>
//               <p className="text-3xl font-bold">156</p>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <p className="text-sm text-muted-foreground mb-1">Teaching Staff</p>
//               <p className="text-3xl font-bold text-primary">98</p>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <p className="text-sm text-muted-foreground mb-1">Non-Teaching</p>
//               <p className="text-3xl font-bold text-success">58</p>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <p className="text-sm text-muted-foreground mb-1">Avg. Experience</p>
//               <p className="text-3xl font-bold">8.5 yrs</p>
//             </CardContent>
//           </Card>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle>All Staff Members</CardTitle>
//               <div className="flex gap-2">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     placeholder="Search staff..."
//                     className="pl-10 w-[300px]"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                 </div>
//                 <Button variant="outline" size="icon">
//                   <Filter className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Staff ID</TableHead>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Role</TableHead>
//                   <TableHead>Department</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Experience</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredStaff.map((member) => (
//                   <TableRow key={member.id}>
//                     <TableCell className="font-medium">{member.id}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-3">
//                         <Avatar>
//                           <AvatarFallback className="bg-primary text-primary-foreground">
//                             {getInitials(member.name)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <span className="font-medium">{member.name}</span>
//                       </div>
//                     </TableCell>
//                     <TableCell>{member.role}</TableCell>
//                     <TableCell>{member.department}</TableCell>
//                     <TableCell>
//                       <div className="flex flex-col gap-1">
//                         <div className="flex items-center gap-2 text-sm">
//                           <Mail className="h-3 w-3 text-muted-foreground" />
//                           <span className="text-muted-foreground">{member.email}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm">
//                           <Phone className="h-3 w-3 text-muted-foreground" />
//                           <span className="text-muted-foreground">{member.phone}</span>
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell>{member.experience}</TableCell>
//                     <TableCell>
//                       <Badge className="bg-success-light text-success">Active</Badge>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex justify-end gap-2">
//                         <Button variant="ghost" size="icon">
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Staff;



import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Mail,
  Phone,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
  experience: string;
}

const Staff = () => {
  const { userRole } = useRole();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

  const [staff, setStaff] = useState<StaffMember[]>([
    { id: "TCH001", name: "Dr. Robert Anderson", role: "Principal", department: "Administration", email: "robert.a@school.com", phone: "+1 234 567 8901", status: "active", experience: "15 years" },
    { id: "TCH002", name: "Jennifer Lee", role: "Math Teacher", department: "Mathematics", email: "jennifer.l@school.com", phone: "+1 234 567 8902", status: "active", experience: "8 years" },
    { id: "TCH003", name: "Michael Chen", role: "Science Teacher", department: "Science", email: "michael.c@school.com", phone: "+1 234 567 8903", status: "active", experience: "10 years" },
    { id: "TCH004", name: "Sarah Williams", role: "English Teacher", department: "Languages", email: "sarah.w@school.com", phone: "+1 234 567 8904", status: "active", experience: "6 years" },
    { id: "STF001", name: "David Brown", role: "Librarian", department: "Library", email: "david.b@school.com", phone: "+1 234 567 8905", status: "active", experience: "12 years" },
    { id: "STF002", name: "Emily Martinez", role: "Admin Officer", department: "Administration", email: "emily.m@school.com", phone: "+1 234 567 8906", status: "active", experience: "5 years" },
    { id: "TCH005", name: "James Wilson", role: "PE Teacher", department: "Physical Education", email: "james.w@school.com", phone: "+1 234 567 8907", status: "active", experience: "7 years" },
  ]);

  // Form state
  const [staffForm, setStaffForm] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    phone: "",
    experience: "",
  });

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Calculate stats
  const totalStaff = staff.length;
  const teachingStaff = staff.filter((s) => s.id.startsWith("TCH")).length;
  const nonTeachingStaff = staff.filter((s) => s.id.startsWith("STF")).length;
  const avgExperience =
    staff.reduce((sum, s) => sum + parseInt(s.experience), 0) / staff.length;

  // Handle Add Staff
  const handleAddStaff = () => {
    setIsAddStaffOpen(true);
  };

  const handleSubmitStaff = () => {
    if (
      !staffForm.name ||
      !staffForm.role ||
      !staffForm.department ||
      !staffForm.email ||
      !staffForm.phone ||
      !staffForm.experience
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const isTeaching = staffForm.role.toLowerCase().includes("teacher") || staffForm.role.toLowerCase().includes("principal");
    const prefix = isTeaching ? "TCH" : "STF";
    const nextNum = (staff.filter((s) => s.id.startsWith(prefix)).length + 1)
      .toString()
      .padStart(3, "0");
    const newId = `${prefix}${nextNum}`;

    const newStaff: StaffMember = {
      id: newId,
      name: staffForm.name,
      role: staffForm.role,
      department: staffForm.department,
      email: staffForm.email,
      phone: staffForm.phone,
      status: "active",
      experience: staffForm.experience,
    };

    setStaff([newStaff, ...staff]);

    toast({
      title: "Staff Added",
      description: `${newStaff.name} (${newStaff.id}) has been added successfully.`,
    });

    setStaffForm({
      name: "",
      role: "",
      department: "",
      email: "",
      phone: "",
      experience: "",
    });
    setIsAddStaffOpen(false);
  };

  const handleExport = () => {
    toast({
      title: "Exporting Staff List",
      description: "Staff data is being exported to CSV...",
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
            <p className="text-muted-foreground">Manage teaching and non-teaching staff records</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button onClick={handleAddStaff} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Staff
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Staff</p>
              <p className="text-3xl font-bold">{totalStaff}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Teaching Staff</p>
              <p className="text-3xl font-bold text-primary">{teachingStaff}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Non-Teaching</p>
              <p className="text-3xl font-bold text-success">{nonTeachingStaff}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Avg. Experience</p>
              <p className="text-3xl font-bold">{avgExperience.toFixed(1)} yrs</p>
            </CardContent>
          </Card>
        </div>

        {/* Staff Table */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Staff Members</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search staff..."
                    className="pl-10 w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStaff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials(member.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{member.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{member.experience}</TableCell>
                    <TableCell>
                      <Badge className="bg-success-light text-success">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Staff Modal */}
        <Dialog open={isAddStaffOpen} onOpenChange={setIsAddStaffOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
              <DialogDescription>
                Enter details for the new staff member.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={staffForm.name}
                      onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                      placeholder="e.g., John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Input
                      id="role"
                      value={staffForm.role}
                      onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value })}
                      placeholder="e.g., Science Teacher"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      value={staffForm.department}
                      onChange={(e) => setStaffForm({ ...staffForm, department: e.target.value })}
                      placeholder="e.g., Science"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={staffForm.email}
                      onChange={(e) => setStaffForm({ ...staffForm, email: e.target.value })}
                      placeholder="e.g., john.d@school.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={staffForm.phone}
                      onChange={(e) => setStaffForm({ ...staffForm, phone: e.target.value })}
                      placeholder="e.g., +1 234 567 8900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience *</Label>
                    <Input
                      id="experience"
                      value={staffForm.experience}
                      onChange={(e) => setStaffForm({ ...staffForm, experience: e.target.value })}
                      placeholder="e.g., 5 years"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              {staffForm.name && staffForm.role && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Staff Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>{staffForm.name}</strong> - {staffForm.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {staffForm.department} · {staffForm.experience} experience
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddStaffOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitStaff}>Add Staff</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Staff;