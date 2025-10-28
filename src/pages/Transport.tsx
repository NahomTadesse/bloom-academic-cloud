// import { useRole } from "@/contexts/RoleContext";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Button } from "@/components/ui/button";
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
// import { Bus, MapPin, Users, Plus, Calendar } from "lucide-react";

// const routes = [
//   { id: 1, routeNo: "R-001", name: "North Route", driver: "Michael Smith", vehicle: "BUS-001", students: 45, capacity: 50, status: "active" },
//   { id: 2, routeNo: "R-002", name: "South Route", driver: "James Brown", vehicle: "BUS-002", students: 38, capacity: 50, status: "active" },
//   { id: 3, routeNo: "R-003", name: "East Route", driver: "Robert Wilson", vehicle: "BUS-003", students: 42, capacity: 50, status: "active" },
//   { id: 4, routeNo: "R-004", name: "West Route", driver: "David Martinez", vehicle: "BUS-004", students: 35, capacity: 45, status: "maintenance" },
// ];

// const vehicles = [
//   { id: 1, vehicleNo: "BUS-001", model: "Mercedes-Benz O500", capacity: 50, lastService: "2025-09-15", nextService: "2025-12-15", status: "active" },
//   { id: 2, vehicleNo: "BUS-002", model: "Volvo B7R", capacity: 50, lastService: "2025-09-20", nextService: "2025-12-20", status: "active" },
//   { id: 3, vehicleNo: "BUS-003", model: "Ashok Leyland Viking", capacity: 50, lastService: "2025-09-10", nextService: "2025-12-10", status: "active" },
//   { id: 4, vehicleNo: "BUS-004", model: "Tata Starbus", capacity: 45, lastService: "2025-10-01", nextService: "2025-11-01", status: "maintenance" },
// ];

// const Transport = () => {
//   const { userRole, setUserRole } = useRole();

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "active":
//         return <Badge className="bg-success-light text-success">Active</Badge>;
//       case "maintenance":
//         return <Badge className="bg-warning-light text-warning">Maintenance</Badge>;
//       default:
//         return <Badge variant="secondary">Unknown</Badge>;
//     }
//   };

//   return (
//     <DashboardLayout userRole={userRole}>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-foreground">Transport Management</h1>
//             <p className="text-muted-foreground">Manage vehicles, routes, and transportation services</p>
//           </div>
//           <Button className="gap-2">
//             <Plus className="h-4 w-4" />
//             Add Route
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Total Vehicles</p>
//                   <p className="text-3xl font-bold">18</p>
//                 </div>
//                 <Bus className="h-10 w-10 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Active Routes</p>
//                   <p className="text-3xl font-bold text-success">15</p>
//                 </div>
//                 <MapPin className="h-10 w-10 text-success" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Students Using Transport</p>
//                   <p className="text-3xl font-bold text-warning">680</p>
//                 </div>
//                 <Users className="h-10 w-10 text-warning" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className="shadow-card">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Under Maintenance</p>
//                   <p className="text-3xl font-bold text-destructive">3</p>
//                 </div>
//                 <Calendar className="h-10 w-10 text-destructive" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle>Active Routes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Route No</TableHead>
//                   <TableHead>Route Name</TableHead>
//                   <TableHead>Driver</TableHead>
//                   <TableHead>Vehicle</TableHead>
//                   <TableHead>Students</TableHead>
//                   <TableHead>Capacity</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {routes.map((route) => (
//                   <TableRow key={route.id}>
//                     <TableCell className="font-medium">{route.routeNo}</TableCell>
//                     <TableCell>{route.name}</TableCell>
//                     <TableCell>{route.driver}</TableCell>
//                     <TableCell>{route.vehicle}</TableCell>
//                     <TableCell>{route.students}</TableCell>
//                     <TableCell>{route.capacity}</TableCell>
//                     <TableCell>{getStatusBadge(route.status)}</TableCell>
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
//             <CardTitle>Vehicle Fleet</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Vehicle No</TableHead>
//                   <TableHead>Model</TableHead>
//                   <TableHead>Capacity</TableHead>
//                   <TableHead>Last Service</TableHead>
//                   <TableHead>Next Service</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {vehicles.map((vehicle) => (
//                   <TableRow key={vehicle.id}>
//                     <TableCell className="font-medium">{vehicle.vehicleNo}</TableCell>
//                     <TableCell>{vehicle.model}</TableCell>
//                     <TableCell>{vehicle.capacity}</TableCell>
//                     <TableCell>{vehicle.lastService}</TableCell>
//                     <TableCell>{vehicle.nextService}</TableCell>
//                     <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
//                     <TableCell className="text-right">
//                       <Button variant="ghost" size="sm">
//                         Manage
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

// export default Transport;


import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
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
  Bus,
  MapPin,
  Users,
  Plus,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Route {
  id: number;
  routeNo: string;
  name: string;
  driver: string;
  vehicle: string;
  students: number;
  capacity: number;
  status: "active" | "maintenance";
}

interface Vehicle {
  id: number;
  vehicleNo: string;
  model: string;
  capacity: number;
  lastService: string;
  nextService: string;
  status: "active" | "maintenance";
}

const Transport = () => {
  const { userRole } = useRole();
  const { toast } = useToast();
  const [isAddRouteOpen, setIsAddRouteOpen] = useState(false);

  const [routes, setRoutes] = useState<Route[]>([
    { id: 1, routeNo: "R-001", name: "North Route", driver: "Michael Smith", vehicle: "BUS-001", students: 45, capacity: 50, status: "active" },
    { id: 2, routeNo: "R-002", name: "South Route", driver: "James Brown", vehicle: "BUS-002", students: 38, capacity: 50, status: "active" },
    { id: 3, routeNo: "R-003", name: "East Route", driver: "Robert Wilson", vehicle: "BUS-003", students: 42, capacity: 50, status: "active" },
    { id: 4, routeNo: "R-004", name: "West Route", driver: "David Martinez", vehicle: "BUS-004", students: 35, capacity: 45, status: "maintenance" },
  ]);

  const vehicles: Vehicle[] = [
    { id: 1, vehicleNo: "BUS-001", model: "Mercedes-Benz O500", capacity: 50, lastService: "2025-09-15", nextService: "2025-12-15", status: "active" },
    { id: 2, vehicleNo: "BUS-002", model: "Volvo B7R", capacity: 50, lastService: "2025-09-20", nextService: "2025-12-20", status: "active" },
    { id: 3, vehicleNo: "BUS-003", model: "Ashok Leyland Viking", capacity: 50, lastService: "2025-09-10", nextService: "2025-12-10", status: "active" },
    { id: 4, vehicleNo: "BUS-004", model: "Tata Starbus", capacity: 45, lastService: "2025-10-01", nextService: "2025-11-01", status: "maintenance" },
  ];

  // Form state
  const [routeForm, setRouteForm] = useState({
    routeNo: "",
    name: "",
    driver: "",
    vehicle: "",
    students: "",
    capacity: "",
  });

  // Calculate stats
  const totalVehicles = vehicles.length;
  const activeRoutes = routes.filter((r) => r.status === "active").length;
  const totalStudents = routes.reduce((sum, r) => sum + r.students, 0);
  const underMaintenance = routes.filter((r) => r.status === "maintenance").length;

  // Badge helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success-light text-success">Active</Badge>;
      case "maintenance":
        return <Badge className="bg-warning-light text-warning">Maintenance</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  // Handle Add Route
  const handleAddRoute = () => {
    setIsAddRouteOpen(true);
  };

  const handleSubmitRoute = () => {
    if (
      !routeForm.routeNo ||
      !routeForm.name ||
      !routeForm.driver ||
      !routeForm.vehicle ||
      !routeForm.students ||
      !routeForm.capacity
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const students = parseInt(routeForm.students);
    const capacity = parseInt(routeForm.capacity);
    if (students < 0 || capacity <= 0 || students > capacity) {
      toast({
        title: "Invalid values",
        description: "Students must be >= 0 and <= capacity.",
        variant: "destructive",
      });
      return;
    }

    const newRoute: Route = {
      id: routes.length + 1,
      routeNo: routeForm.routeNo,
      name: routeForm.name,
      driver: routeForm.driver,
      vehicle: routeForm.vehicle,
      students,
      capacity,
      status: "active",
    };

    setRoutes([newRoute, ...routes]);

    toast({
      title: "Route Added",
      description: `${newRoute.name} (${newRoute.routeNo}) has been added.`,
    });

    setRouteForm({
      routeNo: "",
      name: "",
      driver: "",
      vehicle: "",
      students: "",
      capacity: "",
    });
    setIsAddRouteOpen(false);
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transport Management</h1>
            <p className="text-muted-foreground">Manage vehicles, routes, and transportation services</p>
          </div>
          <Button onClick={handleAddRoute} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Route
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Vehicles</p>
                  <p className="text-3xl font-bold">{totalVehicles}</p>
                </div>
                <Bus className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Routes</p>
                  <p className="text-3xl font-bold text-success">{activeRoutes}</p>
                </div>
                <MapPin className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Students Using Transport</p>
                  <p className="text-3xl font-bold text-warning">{totalStudents}</p>
                </div>
                <Users className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Under Maintenance</p>
                  <p className="text-3xl font-bold text-destructive">{underMaintenance}</p>
                </div>
                <Calendar className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Routes */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route No</TableHead>
                  <TableHead>Route Name</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {routes.map((route) => (
                  <TableRow key={route.id}>
                    <TableCell className="font-medium">{route.routeNo}</TableCell>
                    <TableCell>{route.name}</TableCell>
                    <TableCell>{route.driver}</TableCell>
                    <TableCell>{route.vehicle}</TableCell>
                    <TableCell>{route.students}</TableCell>
                    <TableCell>{route.capacity}</TableCell>
                    <TableCell>{getStatusBadge(route.status)}</TableCell>
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

        {/* Vehicle Fleet */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Vehicle Fleet</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle No</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Last Service</TableHead>
                  <TableHead>Next Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">{vehicle.vehicleNo}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.capacity}</TableCell>
                    <TableCell>{vehicle.lastService}</TableCell>
                    <TableCell>{vehicle.nextService}</TableCell>
                    <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Route Modal */}
        <Dialog open={isAddRouteOpen} onOpenChange={setIsAddRouteOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add New Route</DialogTitle>
              <DialogDescription>
                Create a new transportation route with driver and vehicle assignment.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="routeNo">Route No *</Label>
                    <Input
                      id="routeNo"
                      value={routeForm.routeNo}
                      onChange={(e) => setRouteForm({ ...routeForm, routeNo: e.target.value })}
                      placeholder="e.g., R-005"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Route Name *</Label>
                    <Input
                      id="name"
                      value={routeForm.name}
                      onChange={(e) => setRouteForm({ ...routeForm, name: e.target.value })}
                      placeholder="e.g., Central Route"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="driver">Driver Name *</Label>
                    <Input
                      id="driver"
                      value={routeForm.driver}
                      onChange={(e) => setRouteForm({ ...routeForm, driver: e.target.value })}
                      placeholder="e.g., Alex Turner"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle *</Label>
                    <Input
                      id="vehicle"
                      value={routeForm.vehicle}
                      onChange={(e) => setRouteForm({ ...routeForm, vehicle: e.target.value })}
                      placeholder="e.g., BUS-005"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="students">Current Students *</Label>
                    <Input
                      id="students"
                      type="number"
                      min="0"
                      value={routeForm.students}
                      onChange={(e) => setRouteForm({ ...routeForm, students: e.target.value })}
                      placeholder="e.g., 40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacity *</Label>
                    <Input
                      id="capacity"
                      type="number"
                      min="1"
                      value={routeForm.capacity}
                      onChange={(e) => setRouteForm({ ...routeForm, capacity: e.target.value })}
                      placeholder="e.g., 50"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              {routeForm.name && routeForm.routeNo && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Route Preview:</p>
                  <p className="text-sm mt-1">
                    <strong>{routeForm.name}</strong> ({routeForm.routeNo})
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Driver: {routeForm.driver} · Vehicle: {routeForm.vehicle} · {routeForm.students || 0}/{routeForm.capacity || 0} students
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddRouteOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitRoute}>Add Route</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Transport;