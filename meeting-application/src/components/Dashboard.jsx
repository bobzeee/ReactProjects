import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MeetingsTable from "./MeetingsTable";
import MeetingModal from "./MeetingModal";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
  },
  sub: {
    fontWeight: 600,
    fontSize: 18,
    paddingLeft: 25,
    borderLeft: "4px solid #053858",
  },
  table: {
    display: "flex",
    alignSelf: "center",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography color="secondary" className={classes.sub}>
        Here are your Tasks for Today
      </Typography>
      <Paper elevation={0} className={classes.table}>
        <MeetingsTable />
      </Paper>
      <div style={{ alignSelf: "flex-end" }}>
        <MeetingModal />
      </div>
    </Paper>
  );
};

export default Dashboard;
