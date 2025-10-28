// import { useRole } from "@/contexts/RoleContext";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { DollarSign, TrendingUp, AlertCircle, Download, Plus } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Progress } from "@/components/ui/progress";

// const feeRecords = [
//   { id: 1, student: "John Smith", class: "10-A", totalFee: 5000, paid: 5000, pending: 0, status: "paid", dueDate: "2025-10-15" },
//   { id: 2, student: "Emma Johnson", class: "10-A", totalFee: 5000, paid: 3000, pending: 2000, status: "partial", dueDate: "2025-10-15" },
//   { id: 3, student: "James Wilson", class: "9-B", totalFee: 4500, paid: 0, pending: 4500, status: "pending", dueDate: "2025-10-15" },
//   { id: 4, student: "Sarah Davis", class: "11-C", totalFee: 5500, paid: 5500, pending: 0, status: "paid", dueDate: "2025-10-15" },
//   { id: 5, student: "Olivia Taylor", class: "10-B", totalFee: 5000, paid: 2500, pending: 2500, status: "partial", dueDate: "2025-10-15" },
// ];

// const expenses = [
//   { id: 1, category: "Salaries", amount: 85000, date: "2025-10-01", status: "paid" },
//   { id: 2, category: "Infrastructure", amount: 15000, date: "2025-10-05", status: "paid" },
//   { id: 3, category: "Utilities", amount: 3500, date: "2025-10-10", status: "paid" },
//   { id: 4, category: "Supplies", amount: 5200, date: "2025-10-12", status: "pending" },
// ];

// const Finance = () => {
//   const { userRole, setUserRole } = useRole();

//   const totalCollected = feeRecords.reduce((sum, record) => sum + record.paid, 0);
//   const totalPending = feeRecords.reduce((sum, record) => sum + record.pending, 0);
//   const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "paid":
//         return <Badge className="bg-success-light text-success">Paid</Badge>;
//       case "partial":
//         return <Badge className="bg-warning-light text-warning">Partial</Badge>;
//       case "pending":
//         return <Badge className="bg-destructive/10 text-destructive">Pending</Badge>;
//       default:
//         return <Badge variant="secondary">Unknown</Badge>;
//     }
//   };

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Finance Management</h1>
//             <p className="text-muted-foreground">Track fees, expenses, and financial reports</p>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" className="gap-2">
//               <Download className="h-4 w-4" />
//               Export Report
//             </Button>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               Add Transaction
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Collected</p>
//                   <p className="text-3xl font-bold text-success">${totalCollected.toLocaleString()}</p>
//                 </div>
//                 <DollarSign className="h-10 w-10 text-success" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Pending Fees</p>
//                   <p className="text-3xl font-bold text-warning">${totalPending.toLocaleString()}</p>
//                 </div>
//                 <AlertCircle className="h-10 w-10 text-warning" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
//                   <p className="text-3xl font-bold text-destructive">${totalExpenses.toLocaleString()}</p>
//                 </div>
//                 <TrendingUp className="h-10 w-10 text-destructive" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Net Revenue</p>
//                   <p className="text-3xl font-bold text-primary">${(totalCollected - totalExpenses).toLocaleString()}</p>
//                 </div>
//                 <DollarSign className="h-10 w-10 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="fees" className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="fees">Fee Collection</TabsTrigger>
//             <TabsTrigger value="expenses">Expenses</TabsTrigger>
//             <TabsTrigger value="reports">Financial Reports</TabsTrigger>
//           </TabsList>

//           <TabsContent value="fees" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle>Fee Collection Records</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Student Name</TableHead>
//                       <TableHead>Class</TableHead>
//                       <TableHead>Total Fee</TableHead>
//                       <TableHead>Paid</TableHead>
//                       <TableHead>Pending</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Due Date</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {feeRecords.map((record) => (
//                       <TableRow key={record.id}>
//                         <TableCell className="font-medium">{record.student}</TableCell>
//                         <TableCell>{record.class}</TableCell>
//                         <TableCell>${record.totalFee}</TableCell>
//                         <TableCell className="text-success">${record.paid}</TableCell>
//                         <TableCell className="text-destructive">${record.pending}</TableCell>
//                         <TableCell>{getStatusBadge(record.status)}</TableCell>
//                         <TableCell>{record.dueDate}</TableCell>
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

//           <TabsContent value="expenses" className="space-y-4">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle>Expense Records</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Category</TableHead>
//                       <TableHead>Amount</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {expenses.map((expense) => (
//                       <TableRow key={expense.id}>
//                         <TableCell className="font-medium">{expense.category}</TableCell>
//                         <TableCell className="text-destructive">${expense.amount.toLocaleString()}</TableCell>
//                         <TableCell>{expense.date}</TableCell>
//                         <TableCell>{getStatusBadge(expense.status)}</TableCell>
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
//                 <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
//                 <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
//                 <p className="text-muted-foreground mb-4">Generate detailed financial reports and analytics</p>
//                 <Button>Generate Report</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Finance;



import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  TrendingUp,
  AlertCircle,
  Download,
  Plus,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FeeRecord {
  id: number;
  student: string;
  class: string;
  totalFee: number;
  paid: number;
  pending: number;
  status: "paid" | "partial" | "pending";
  dueDate: string;
}

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
  status: "paid" | "pending";
}

const Finance = () => {
  const { userRole } = useRole();
  const { toast } = useToast();

  const [feeRecords, setFeeRecords] = useState<FeeRecord[]>([
    { id: 1, student: "John Smith", class: "10-A", totalFee: 5000, paid: 5000, pending: 0, status: "paid", dueDate: "2025-10-15" },
    { id: 2, student: "Emma Johnson", class: "10-A", totalFee: 5000, paid: 3000, pending: 2000, status: "partial", dueDate: "2025-10-15" },
    { id: 3, student: "James Wilson", class: "9-B", totalFee: 4500, paid: 0, pending: 4500, status: "pending", dueDate: "2025-10-15" },
    { id: 4, student: "Sarah Davis", class: "11-C", totalFee: 5500, paid: 5500, pending: 0, status: "paid", dueDate: "2025-10-15" },
    { id: 5, student: "Olivia Taylor", class: "10-B", totalFee: 5000, paid: 2500, pending: 2500, status: "partial", dueDate: "2025-10-15" },
  ]);

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, category: "Salaries", amount: 85000, date: "2025-10-01", status: "paid" },
    { id: 2, category: "Infrastructure", amount: 15000, date: "2025-10-05", status: "paid" },
    { id: 3, category: "Utilities", amount: 3500, date: "2025-10-10", status: "paid" },
    { id: 4, category: "Supplies", amount: 5200, date: "2025-10-12", status: "pending" },
  ]);

  // Modal state
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  // Form state
  const [transactionForm, setTransactionForm] = useState({
    type: "fee",
    student: "",
    class: "",
    amount: "",
    category: "",
    date: "",
  });

  // Calculate stats
  const totalCollected = feeRecords.reduce((sum, r) => sum + r.paid, 0);
  const totalPending = feeRecords.reduce((sum, r) => sum + r.pending, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const netRevenue = totalCollected - totalExpenses;

  // Badge helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-success-light text-success">Paid</Badge>;
      case "partial":
        return <Badge className="bg-warning-light text-warning">Partial</Badge>;
      case "pending":
        return <Badge className="bg-destructive/10 text-destructive">Pending</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  // Handle Add Transaction
  const handleAddTransaction = () => {
    setIsAddTransactionOpen(true);
  };

  const handleSubmitTransaction = () => {
    const amount = parseFloat(transactionForm.amount);
    if (!amount || amount <= 0) {
      toast({ title: "Invalid amount", description: "Amount must be greater than 0.", variant: "destructive" });
      return;
    }

    if (transactionForm.type === "fee") {
      if (!transactionForm.student || !transactionForm.class) {
        toast({ title: "Missing fields", description: "Student and class are required.", variant: "destructive" });
        return;
      }

      // Find existing student or create new
      const existing = feeRecords.find(
        (r) => r.student === transactionForm.student && r.class === transactionForm.class
      );

      if (existing) {
        const newPaid = existing.paid + amount;
        const newPending = Math.max(0, existing.totalFee - newPaid);
        const newStatus: "paid" | "partial" | "pending" = newPending === 0 ? "paid" : newPaid > 0 ? "partial" : "pending";

        setFeeRecords(
          feeRecords.map((r) =>
            r.id === existing.id
              ? { ...r, paid: newPaid, pending: newPending, status: newStatus }
              : r
          )
        );
      } else {
        const newRecord: FeeRecord = {
          id: feeRecords.length + 1,
          student: transactionForm.student,
          class: transactionForm.class,
          totalFee: amount,
          paid: amount,
          pending: 0,
          status: "paid",
          dueDate: transactionForm.date || new Date().toISOString().split("T")[0],
        };
        setFeeRecords([newRecord, ...feeRecords]);
      }

      toast({
        title: "Fee Payment Added",
        description: `${transactionForm.student} paid $${amount.toLocaleString()}.`,
      });
    } else {
      if (!transactionForm.category) {
        toast({ title: "Missing category", description: "Please select a category.", variant: "destructive" });
        return;
      }

      const newExpense: Expense = {
        id: expenses.length + 1,
        category: transactionForm.category,
        amount,
        date: transactionForm.date || new Date().toISOString().split("T")[0],
        status: "paid",
      };

      setExpenses([newExpense, ...expenses]);

      toast({
        title: "Expense Added",
        description: `${transactionForm.category}: $${amount.toLocaleString()} recorded.`,
      });
    }

    setTransactionForm({
      type: "fee",
      student: "",
      class: "",
      amount: "",
      category: "",
      date: "",
    });
    setIsAddTransactionOpen(false);
  };

  const handleExport = () => {
    toast({
      title: "Exporting Report",
      description: "Financial report is being generated...",
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Finance Management</h1>
            <p className="text-muted-foreground">Track fees, expenses, and financial reports</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button onClick={handleAddTransaction} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Transaction
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Collected</p>
                  <p className="text-3xl font-bold text-success">${totalCollected.toLocaleString()}</p>
                </div>
                <DollarSign className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Fees</p>
                  <p className="text-3xl font-bold text-warning">${totalPending.toLocaleString()}</p>
                </div>
                <AlertCircle className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
                  <p className="text-3xl font-bold text-destructive">${totalExpenses.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Net Revenue</p>
                  <p className="text-3xl font-bold text-primary">${netRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="fees" className="space-y-4">
          <TabsList>
            <TabsTrigger value="fees">Fee Collection</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="reports">Financial Reports</TabsTrigger>
          </TabsList>

          {/* Fee Collection */}
          <TabsContent value="fees" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Fee Collection Records</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Total Fee</TableHead>
                      <TableHead>Paid</TableHead>
                      <TableHead>Pending</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.student}</TableCell>
                        <TableCell>{record.class}</TableCell>
                        <TableCell>${record.totalFee.toLocaleString()}</TableCell>
                        <TableCell className="text-success">${record.paid.toLocaleString()}</TableCell>
                        <TableCell className="text-destructive">${record.pending.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(record.status)}</TableCell>
                        <TableCell>{record.dueDate}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expenses */}
          <TabsContent value="expenses" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Expense Records</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell className="font-medium">{expense.category}</TableCell>
                        <TableCell className="text-destructive">${expense.amount.toLocaleString()}</TableCell>
                        <TableCell>{expense.date}</TableCell>
                        <TableCell>{getStatusBadge(expense.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
                <p className="text-muted-foreground mb-4">Generate detailed financial reports and analytics</p>
                <Button>Generate Report</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Transaction Modal */}
        <Dialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add Transaction</DialogTitle>
              <DialogDescription>
                Record a fee payment or expense.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              {/* Transaction Type */}
              <div className="space-y-2">
                <Label>Transaction Type</Label>
                <Select
                  value={transactionForm.type}
                  onValueChange={(v) => setTransactionForm({ ...transactionForm, type: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fee">Fee Payment</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transactionForm.type === "fee" ? (
                  <>
                    {/* Fee Fields */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student">Student Name *</Label>
                        <Input
                          id="student"
                          value={transactionForm.student}
                          onChange={(e) => setTransactionForm({ ...transactionForm, student: e.target.value })}
                          placeholder="e.g., Alex Brown"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="class">Class *</Label>
                        <Input
                          id="class"
                          value={transactionForm.class}
                          onChange={(e) => setTransactionForm({ ...transactionForm, class: e.target.value })}
                          placeholder="e.g., 10-B"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount Paid *</Label>
                        <Input
                          id="amount"
                          type="number"
                          min="1"
                          value={transactionForm.amount}
                          onChange={(e) => setTransactionForm({ ...transactionForm, amount: e.target.value })}
                          placeholder="e.g., 1500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feeDate">Payment Date</Label>
                        <Input
                          id="feeDate"
                          type="date"
                          value={transactionForm.date}
                          onChange={(e) => setTransactionForm({ ...transactionForm, date: e.target.value })}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Expense Fields */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select
                          value={transactionForm.category}
                          onValueChange={(v) => setTransactionForm({ ...transactionForm, category: v })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Salaries">Salaries</SelectItem>
                            <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                            <SelectItem value="Utilities">Utilities</SelectItem>
                            <SelectItem value="Supplies">Supplies</SelectItem>
                            <SelectItem value="Maintenance">Maintenance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="expenseAmount">Amount *</Label>
                        <Input
                          id="expenseAmount"
                          type="number"
                          min="1"
                          value={transactionForm.amount}
                          onChange={(e) => setTransactionForm({ ...transactionForm, amount: e.target.value })}
                          placeholder="e.g., 2500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expenseDate">Date</Label>
                        <Input
                          id="expenseDate"
                          type="date"
                          value={transactionForm.date}
                          onChange={(e) => setTransactionForm({ ...transactionForm, date: e.target.value })}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Preview */}
              {transactionForm.amount && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Transaction Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>
                      {transactionForm.type === "fee"
                        ? `Fee Payment: $${parseFloat(transactionForm.amount).toLocaleString()}`
                        : `Expense: $${parseFloat(transactionForm.amount).toLocaleString()}`}
                    </strong>
                  </p>
                  {transactionForm.type === "fee" && transactionForm.student && (
                    <p className="text-sm text-muted-foreground">
                      {transactionForm.student} ({transactionForm.class})
                    </p>
                  )}
                  {transactionForm.type === "expense" && transactionForm.category && (
                    <p className="text-sm text-muted-foreground">
                      {transactionForm.category}
                    </p>
                  )}
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddTransactionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitTransaction}>
                {transactionForm.type === "fee" ? "Record Payment" : "Add Expense"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Finance;