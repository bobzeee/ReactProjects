import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MeetingsTable from "./MeetingsTable";
import MeetingModal from "./MeetingModal";
import Data from "../Data";

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
  const [rows, setRows] = useState(Data);

  const deleteMeeting = (id) => {
    const meetingsList = [...rows];
    meetingsList.splice(id, 1);
    setRows(meetingsList);
  };

  const addMeeting = () => {};

  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography color="secondary" className={classes.sub}>
        Here are your Tasks for Today
      </Typography>
      <Paper elevation={0} className={classes.table}>
        <MeetingsTable meetingsList={rows} onDelete={deleteMeeting} />
      </Paper>
      <div style={{ alignSelf: "flex-end" }}>
        <MeetingModal />
      </div>
    </Paper>
  );
};

export default Dashboard;
