import { Sidebar } from "lucide-react";
import React from "react";

const DashboardLayout = () => {
  return (
    <aside className="fixed inset-y-0 z-50 flex-col hidden w-56 md:flex">
      <Sidebar />
    </aside>
  );
};

export default DashboardLayout;
