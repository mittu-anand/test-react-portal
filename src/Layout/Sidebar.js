import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DomainIcon from "@mui/icons-material/Domain";
import logo from "../logo.png";

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <div className="oapp-logo-wrapper">
        <img className="oapp-logo" alt="test" src={logo} />
      </div>
      <List>
        <ListItem
          className="sidebar-link-item"
          button
          component={Link}
          to="/dashboard"
        >
          <ListItemText>
            <DashboardIcon />
            <div>Dashboard</div>
          </ListItemText>
        </ListItem>
        <ListItem
          className="sidebar-link-item"
          button
          component={Link}
          to="#"
        >
          <ListItemText>
            <DomainIcon />
            <div>Help</div>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
