import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "admin" | "teacher" | "student" | "parent";
  onRoleChange?: (role: "admin" | "teacher" | "student" | "parent") => void;
}

export const DashboardLayout = ({ children, userRole, onRoleChange }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar userRole={userRole} />
        <div className="flex-1 flex flex-col">
          <TopBar userRole={userRole} onRoleChange={onRoleChange} />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
