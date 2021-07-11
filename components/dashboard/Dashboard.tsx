import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import AppBarComponent from "./AppBar";
import SideBarComponent from "./SideBarComponent";
import { useStyles } from "./DashboardStyles";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <CssBaseline />
      <Container className={classes.root}>
        <AppBarComponent open={open} setOpen={setOpen} />
        <SideBarComponent open={open} setOpen={setOpen} />
        <DashboardContent />
      </Container>
    </div>
  );
}
