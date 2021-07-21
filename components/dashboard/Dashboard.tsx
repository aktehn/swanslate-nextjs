import React from "react";
import { CssBaseline } from "@material-ui/core";
import SideBarComponent from "./SideBarComponent";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <div>
      <SideBarComponent />
      <DashboardContent />
    </div>
  );
}
