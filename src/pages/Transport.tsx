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
import { Bus, MapPin, Users, Plus, Calendar } from "lucide-react";

const routes = [
  { id: 1, routeNo: "R-001", name: "North Route", driver: "Michael Smith", vehicle: "BUS-001", students: 45, capacity: 50, status: "active" },
  { id: 2, routeNo: "R-002", name: "South Route", driver: "James Brown", vehicle: "BUS-002", students: 38, capacity: 50, status: "active" },
  { id: 3, routeNo: "R-003", name: "East Route", driver: "Robert Wilson", vehicle: "BUS-003", students: 42, capacity: 50, status: "active" },
  { id: 4, routeNo: "R-004", name: "West Route", driver: "David Martinez", vehicle: "BUS-004", students: 35, capacity: 45, status: "maintenance" },
];

const vehicles = [
  { id: 1, vehicleNo: "BUS-001", model: "Mercedes-Benz O500", capacity: 50, lastService: "2025-09-15", nextService: "2025-12-15", status: "active" },
  { id: 2, vehicleNo: "BUS-002", model: "Volvo B7R", capacity: 50, lastService: "2025-09-20", nextService: "2025-12-20", status: "active" },
  { id: 3, vehicleNo: "BUS-003", model: "Ashok Leyland Viking", capacity: 50, lastService: "2025-09-10", nextService: "2025-12-10", status: "active" },
  { id: 4, vehicleNo: "BUS-004", model: "Tata Starbus", capacity: 45, lastService: "2025-10-01", nextService: "2025-11-01", status: "maintenance" },
];

const Transport = () => {
  const { userRole, setUserRole } = useRole();

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

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transport Management</h1>
            <p className="text-muted-foreground">Manage vehicles, routes, and transportation services</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Route
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Vehicles</p>
                  <p className="text-3xl font-bold">18</p>
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
                  <p className="text-3xl font-bold text-success">15</p>
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
                  <p className="text-3xl font-bold text-warning">680</p>
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
                  <p className="text-3xl font-bold text-destructive">3</p>
                </div>
                <Calendar className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

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
      </div>
    </DashboardLayout>
  );
};

export default Transport;
