import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as LeftDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  drawer: {
    width: "2200px",
  },
});

const Drawer = () => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon color="secondary" />,
    },
    {
      text: "All Todos",
      icon: <ViewListIcon color="secondary" />,
    },
    {
      text: "Profile",
      icon: <PersonIcon color="secondary" />,
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  return (
    <LeftDrawer id="draw" variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </LeftDrawer>
  );
};

export default Drawer;
