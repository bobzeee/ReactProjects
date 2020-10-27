import React, { useState } from "react";
import Data from "../Data";
import Row from "./MeetingsTableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
    overflow: "hidden",
  },
});

function MeetingsTable() {
  const [rows, setRows] = useState(Data);

  const handleDelete = (id) => {
    const meetingsList = [...rows];
    // meetingsList.filter((meeting) => meeting.id !== id);
    meetingsList.splice(id, 1);
    setRows(meetingsList);
  };

  const classes = useStyles();
  return (
    <TableContainer elevation={0} className={classes.table} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={row.id} index={index} row={row} onDelete={handleDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MeetingsTable;
