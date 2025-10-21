import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, AlertCircle, Download, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const feeRecords = [
  { id: 1, student: "John Smith", class: "10-A", totalFee: 5000, paid: 5000, pending: 0, status: "paid", dueDate: "2025-10-15" },
  { id: 2, student: "Emma Johnson", class: "10-A", totalFee: 5000, paid: 3000, pending: 2000, status: "partial", dueDate: "2025-10-15" },
  { id: 3, student: "James Wilson", class: "9-B", totalFee: 4500, paid: 0, pending: 4500, status: "pending", dueDate: "2025-10-15" },
  { id: 4, student: "Sarah Davis", class: "11-C", totalFee: 5500, paid: 5500, pending: 0, status: "paid", dueDate: "2025-10-15" },
  { id: 5, student: "Olivia Taylor", class: "10-B", totalFee: 5000, paid: 2500, pending: 2500, status: "partial", dueDate: "2025-10-15" },
];

const expenses = [
  { id: 1, category: "Salaries", amount: 85000, date: "2025-10-01", status: "paid" },
  { id: 2, category: "Infrastructure", amount: 15000, date: "2025-10-05", status: "paid" },
  { id: 3, category: "Utilities", amount: 3500, date: "2025-10-10", status: "paid" },
  { id: 4, category: "Supplies", amount: 5200, date: "2025-10-12", status: "pending" },
];

const Finance = () => {
  const [userRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");

  const totalCollected = feeRecords.reduce((sum, record) => sum + record.paid, 0);
  const totalPending = feeRecords.reduce((sum, record) => sum + record.pending, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

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

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Finance Management</h1>
            <p className="text-muted-foreground">Track fees, expenses, and financial reports</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Transaction
            </Button>
          </div>
        </div>

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
                  <p className="text-3xl font-bold text-primary">${(totalCollected - totalExpenses).toLocaleString()}</p>
                </div>
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fees" className="space-y-4">
          <TabsList>
            <TabsTrigger value="fees">Fee Collection</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="reports">Financial Reports</TabsTrigger>
          </TabsList>

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
                        <TableCell>${record.totalFee}</TableCell>
                        <TableCell className="text-success">${record.paid}</TableCell>
                        <TableCell className="text-destructive">${record.pending}</TableCell>
                        <TableCell>{getStatusBadge(record.status)}</TableCell>
                        <TableCell>{record.dueDate}</TableCell>
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
      </div>
    </DashboardLayout>
  );
};

export default Finance;
