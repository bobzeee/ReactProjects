import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#ebeff5",
    minHeight: 525,
    paddingLeft: 40,
    paddingTop: 50,
  },
  listItem: {
    display: "flex",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    opacity: ".5",
    color: theme.palette.secondary.main,
    "&.active": {
      opacity: " 1",
    },
    "&:hover": {
      opacity: ".8",
    },
  },
  sub: {
    fontSize: 18,
    fontWeight: 700,
    alignItems: "center",
  },
}));

// const useStyles = makeStyles({
//   paper: {
//     backgroundColor: "#EBEFF5",
//     padding: "50px 0",
//     width: "260px",
//     height: "550px",
//   },
//   listItem: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#053858",
//     opacity: ".5",

//     "&.active": {
//       color: "#053858",
//       opacity: "1",
//     },

//     "&:hover": {
//       color: "#053858",
//       textDecoration: "none",
//       opacity: "1",
//     },
//   },
// });

const LeftNavigation = () => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon color="secondary" />,
      onClick: "/Dashboard",
    },
    {
      text: "Meetings",
      icon: <ViewListIcon color="secondary" />,
      onClick: "/meetings",
    },
    {
      text: "Profile",
      icon: <PersonIcon color="secondary" />,
      onClick: "/profile",
    },
    {
      text: "Settings",
      icon: <SettingsIcon color="secondary" />,
      onClick: "/settings",
    },
  ];

  return (
    <Paper square elevation={0} className={classes.paper}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              className={classes.listItem}
              key={index}
              to={onClick}
            >
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <Typography className={classes.sub} variant="h5">
                  {text}
                </Typography>
                {/* <ListItemText primary={text} /> */}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Paper>
  );
};

export default LeftNavigation;
