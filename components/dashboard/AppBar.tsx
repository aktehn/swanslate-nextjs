import { IconButton, Toolbar, Typography, AppBar } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import clsx from "clsx";
import { useStyles } from "./DashboardStyles";

type AppBarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppBarComponent({ open, setOpen }: AppBarProps) {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
