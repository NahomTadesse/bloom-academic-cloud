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
// import { BookOpen, Search, Plus, Download, Calendar } from "lucide-react";

// const books = [
//   { id: 1, isbn: "978-0-13-468599-1", title: "Introduction to Algorithms", author: "Thomas Cormen", category: "Computer Science", available: 5, total: 8, status: "available" },
//   { id: 2, isbn: "978-0-14-243724-7", title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", available: 3, total: 6, status: "available" },
//   { id: 3, isbn: "978-0-07-352344-6", title: "Physics Principles", author: "Halliday & Resnick", category: "Science", available: 0, total: 10, status: "unavailable" },
//   { id: 4, isbn: "978-0-452-28423-4", title: "1984", author: "George Orwell", category: "Fiction", available: 2, total: 5, status: "available" },
//   { id: 5, isbn: "978-0-321-57351-3", title: "Calculus", author: "James Stewart", category: "Mathematics", available: 4, total: 7, status: "available" },
// ];

// const borrowedBooks = [
//   { id: 1, student: "John Smith", book: "Introduction to Algorithms", borrowDate: "2025-10-15", dueDate: "2025-11-15", status: "active" },
//   { id: 2, student: "Emma Johnson", book: "To Kill a Mockingbird", borrowDate: "2025-10-10", dueDate: "2025-11-10", status: "overdue" },
//   { id: 3, student: "James Wilson", book: "Physics Principles", borrowDate: "2025-10-18", dueDate: "2025-11-18", status: "active" },
// ];

// const Library = () => {
//   const { userRole, setUserRole } = useRole();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.isbn.includes(searchQuery)
//   );

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "available":
//         return <Badge className="bg-success-light text-success">Available</Badge>;
//       case "unavailable":
//         return <Badge className="bg-destructive/10 text-destructive">Out of Stock</Badge>;
//       case "active":
//         return <Badge className="bg-primary/10 text-primary">Active</Badge>;
//       case "overdue":
//         return <Badge className="bg-destructive/10 text-destructive">Overdue</Badge>;
//       default:
//         return <Badge variant="secondary">Unknown</Badge>;
//     }
//   };

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Library Management</h1>
//             <p className="text-muted-foreground">Manage books, track borrowings, and digital resources</p>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" className="gap-2">
//               <Download className="h-4 w-4" />
//               Export
//             </Button>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               Add Book
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Books</p>
//                   <p className="text-3xl font-bold">2,450</p>
//                 </div>
//                 <BookOpen className="h-10 w-10 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Available</p>
//                   <p className="text-3xl font-bold text-success">1,850</p>
//                 </div>
//                 <BookOpen className="h-10 w-10 text-success" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Borrowed</p>
//                   <p className="text-3xl font-bold text-warning">580</p>
//                 </div>
//                 <Calendar className="h-10 w-10 text-warning" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Overdue</p>
//                   <p className="text-3xl font-bold text-destructive">20</p>
//                 </div>
//                 <Calendar className="h-10 w-10 text-destructive" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle>Book Catalog</CardTitle>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by title, author, or ISBN..."
//                   className="pl-10 w-[300px]"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>ISBN</TableHead>
//                   <TableHead>Title</TableHead>
//                   <TableHead>Author</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Available/Total</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredBooks.map((book) => (
//                   <TableRow key={book.id}>
//                     <TableCell className="font-medium">{book.isbn}</TableCell>
//                     <TableCell>{book.title}</TableCell>
//                     <TableCell>{book.author}</TableCell>
//                     <TableCell>
//                       <Badge variant="secondary">{book.category}</Badge>
//                     </TableCell>
//                     <TableCell>
//                       {book.available}/{book.total}
//                     </TableCell>
//                     <TableCell>{getStatusBadge(book.status)}</TableCell>
//                     <TableCell className="text-right">
//                       <Button variant="ghost" size="sm">
//                         View Details
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle>Borrowed Books</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Student Name</TableHead>
//                   <TableHead>Book Title</TableHead>
//                   <TableHead>Borrow Date</TableHead>
//                   <TableHead>Due Date</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {borrowedBooks.map((record) => (
//                   <TableRow key={record.id}>
//                     <TableCell className="font-medium">{record.student}</TableCell>
//                     <TableCell>{record.book}</TableCell>
//                     <TableCell>{record.borrowDate}</TableCell>
//                     <TableCell>{record.dueDate}</TableCell>
//                     <TableCell>{getStatusBadge(record.status)}</TableCell>
//                     <TableCell className="text-right">
//                       <Button variant="ghost" size="sm">
//                         Return
//                       </Button>
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

// export default Library;



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
  BookOpen,
  Search,
  Plus,
  Download,
  Calendar,
} from "lucide-react";
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

interface Book {
  id: number;
  isbn: string;
  title: string;
  author: string;
  category: string;
  available: number;
  total: number;
  status: "available" | "unavailable";
}

interface BorrowedBook {
  id: number;
  student: string;
  book: string;
  borrowDate: string;
  dueDate: string;
  status: "active" | "overdue";
}

const Library = () => {
  const { userRole } = useRole();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);

  const [books, setBooks] = useState<Book[]>([
    { id: 1, isbn: "978-0-13-468599-1", title: "Introduction to Algorithms", author: "Thomas Cormen", category: "Computer Science", available: 5, total: 8, status: "available" },
    { id: 2, isbn: "978-0-14-243724-7", title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", available: 3, total: 6, status: "available" },
    { id: 3, isbn: "978-0-07-352344-6", title: "Physics Principles", author: "Halliday & Resnick", category: "Science", available: 0, total: 10, status: "unavailable" },
    { id: 4, isbn: "978-0-452-28423-4", title: "1984", author: "George Orwell", category: "Fiction", available: 2, total: 5, status: "available" },
    { id: 5, isbn: "978-0-321-57351-3", title: "Calculus", author: "James Stewart", category: "Mathematics", available: 4, total: 7, status: "available" },
  ]);

  const borrowedBooks: BorrowedBook[] = [
    { id: 1, student: "John Smith", book: "Introduction to Algorithms", borrowDate: "2025-10-15", dueDate: "2025-11-15", status: "active" },
    { id: 2, student: "Emma Johnson", book: "To Kill a Mockingbird", borrowDate: "2025-10-10", dueDate: "2025-11-10", status: "overdue" },
    { id: 3, student: "James Wilson", book: "Physics Principles", borrowDate: "2025-10-18", dueDate: "2025-11-18", status: "active" },
  ];

  // Form state
  const [bookForm, setBookForm] = useState({
    isbn: "",
    title: "",
    author: "",
    category: "",
    totalCopies: "",
  });

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.includes(searchQuery)
  );

  // Calculate stats
  const totalBooks = books.reduce((sum, b) => sum + b.total, 0);
  const availableBooks = books.reduce((sum, b) => sum + b.available, 0);
  const borrowedCount = books.reduce((sum, b) => sum + (b.total - b.available), 0);
  const overdueCount = borrowedBooks.filter((b) => b.status === "overdue").length;

  // Badge helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-success-light text-success">Available</Badge>;
      case "unavailable":
        return <Badge className="bg-destructive/10 text-destructive">Out of Stock</Badge>;
      case "active":
        return <Badge className="bg-primary/10 text-primary">Active</Badge>;
      case "overdue":
        return <Badge className="bg-destructive/10 text-destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  // Handle Add Book
  const handleAddBook = () => {
    setIsAddBookOpen(true);
  };

  const handleSubmitBook = () => {
    if (
      !bookForm.isbn ||
      !bookForm.title ||
      !bookForm.author ||
      !bookForm.category ||
      !bookForm.totalCopies
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const total = parseInt(bookForm.totalCopies);
    if (total <= 0) {
      toast({
        title: "Invalid copies",
        description: "Total copies must be greater than 0.",
        variant: "destructive",
      });
      return;
    }

    const newBook: Book = {
      id: books.length + 1,
      isbn: bookForm.isbn,
      title: bookForm.title,
      author: bookForm.author,
      category: bookForm.category,
      available: total,
      total,
      status: "available",
    };

    setBooks([newBook, ...books]);

    toast({
      title: "Book Added",
      description: `${newBook.title} (${newBook.isbn}) has been added to the catalog.`,
    });

    setBookForm({
      isbn: "",
      title: "",
      author: "",
      category: "",
      totalCopies: "",
    });
    setIsAddBookOpen(false);
  };

  const handleExport = () => {
    toast({
      title: "Exporting Catalog",
      description: "Library catalog is being exported...",
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Library Management</h1>
            <p className="text-muted-foreground">Manage books, track borrowings, and digital resources</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button onClick={handleAddBook} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Book
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Books</p>
                  <p className="text-3xl font-bold">{totalBooks}</p>
                </div>
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Available</p>
                  <p className="text-3xl font-bold text-success">{availableBooks}</p>
                </div>
                <BookOpen className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Borrowed</p>
                  <p className="text-3xl font-bold text-warning">{borrowedCount}</p>
                </div>
                <Calendar className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Overdue</p>
                  <p className="text-3xl font-bold text-destructive">{overdueCount}</p>
                </div>
                <Calendar className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Book Catalog */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Book Catalog</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, author, or ISBN..."
                  className="pl-10 w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Available/Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.isbn}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{book.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {book.available}/{book.total}
                    </TableCell>
                    <TableCell>{getStatusBadge(book.status)}</TableCell>
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

        {/* Borrowed Books */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Borrowed Books</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Book Title</TableHead>
                  <TableHead>Borrow Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {borrowedBooks.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.student}</TableCell>
                    <TableCell>{record.book}</TableCell>
                    <TableCell>{record.borrowDate}</TableCell>
                    <TableCell>{record.dueDate}</TableCell>
                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Return
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Book Modal */}
        <Dialog open={isAddBookOpen} onOpenChange={setIsAddBookOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add New Book</DialogTitle>
              <DialogDescription>
                Add a new book to the library catalog.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="isbn">ISBN *</Label>
                    <Input
                      id="isbn"
                      value={bookForm.isbn}
                      onChange={(e) => setBookForm({ ...bookForm, isbn: e.target.value })}
                      placeholder="e.g., 978-0-13-468599-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={bookForm.title}
                      onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                      placeholder="e.g., Introduction to Algorithms"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      value={bookForm.author}
                      onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
                      placeholder="e.g., Thomas Cormen"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      value={bookForm.category}
                      onChange={(e) => setBookForm({ ...bookForm, category: e.target.value })}
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalCopies">Total Copies *</Label>
                    <Input
                      id="totalCopies"
                      type="number"
                      min="1"
                      value={bookForm.totalCopies}
                      onChange={(e) => setBookForm({ ...bookForm, totalCopies: e.target.value })}
                      placeholder="e.g., 10"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              {bookForm.title && bookForm.isbn && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Book Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>{bookForm.title}</strong> by <strong>{bookForm.author}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ISBN: {bookForm.isbn} · {bookForm.category} · {bookForm.totalCopies} copies
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddBookOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitBook}>Add Book</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Library;