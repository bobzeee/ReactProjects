import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import LeftNavigation from "./components/LeftNavigation";
import Dashboard from "./components/Dashboard";
import AllTodos from "./components/AllTodos";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import MeetingsForm from "./components/MeetingsForm";
import "./App.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
    backgroundColor: "#ebeff5",
  },
  root: {
    borderRadius: 10,
    width: 1300,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className={classes.container}>
        <div>
          <LeftNavigation />
        </div>
        <Paper elevation={0} className={classes.root}>
          <Route exact path="/meetings" component={AllTodos} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/new-meeting" component={MeetingsForm} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Paper>
      </div>
    </Router>
  );
}

export default App;
