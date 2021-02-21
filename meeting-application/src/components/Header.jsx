import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    minHeight: 140,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(27),
    paddingRight: theme.spacing(4),
    border: "none",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    fontWeight: 700,
    fontSize: 40,
  },

  sub: {
    marginTop: 20,
    marginRight: 20,
    fontWeight: 600,
    fontSize: 18,
  },
}));

const Header = () => {
  const classes = useStyles();
  const imagesource =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQooL5AwvbbuwRZr7QWjC9VmUgS2reeZMxGIw&usqp=CAU";
  return (
    <div className={classes.root}>
      <Grid container>
        {" "}
        <Grid item xs={12}>
          <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
              <Typography
                className={classes.title}
                variant="h3"
                color="secondary"
              >
                Good morning, Jason
              </Typography>

              <IconButton
                style={{ marginTop: 7 }}
                aria-label="notification"
                color="secondary"
              >
                <NotificationsIcon />
              </IconButton>
              <Typography
                className={classes.sub}
                variant="h5"
                color="secondary"
              >
                Jason Blage
              </Typography>
              <Avatar
                style={{ marginTop: 13 }}
                alt="Jason Derulo"
                src={imagesource}
              />
            </Toolbar>
          </AppBar>
        </Grid>{" "}
      </Grid>
    </div>
  );
};

export default Header;

/* <div className="header__container">
      {/* <h1 className="header__content__greeting">Good morning, Jason</h1> */

//   <Typography variant="h3" color="secondary">
//     Good morning, Jason
//   </Typography>
//   <div className="header__container__user">
//     <NotificationsIcon />
//     <h4 style={{ margin: "0 10px" }}>Jason Blage</h4>
//     <img
//       className="header__container__user__image"
//       src={imagesource}
//       alt=""
//     />
//   </div>
// </div>
