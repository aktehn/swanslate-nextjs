import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const sideMenuItems = ["Dashboard", "My Assigments", "My History", "My Wallet"];
const sideMenuLastSeens = ["Current month", "Last quarter"];

export const mainListItems = (
  <div>
    {sideMenuItems.map((item, i) => (
      <ListItem key={i} button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Last seens</ListSubheader>

    {sideMenuLastSeens.map((item, i) => (
      <ListItem key={i} button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </div>
);
