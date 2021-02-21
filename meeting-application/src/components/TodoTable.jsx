import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Data from "../Data";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const NewTableCell = withStyles({
  root: {
    borderBottom: "none",
  },
})(MuiTableCell);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.primary.light,
    },
    paper: {},
  },
}))(TableRow);

const meetings = Data;

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 1000,
    overflow: "hidden",
  },
  table2: {
    minWidth: 700,
    overflow: "hidden",
  },
  tablerow: {
    borderLeft: "1px solid #d5dee3",
    borderRight: "3px solid #d5dee3",
  },
  date: {
    fontSize: 24,
    fontWeight: 600,
  },
  month: {
    fontSize: 16,
    fontWeight: 600,
  },
  name: { fontSize: 20, fontWeight: 600 },
  description: { fontSize: 14, fontWeight: 200 },
  time: {
    color: "#053858",
    border: "1px solid #053858",
    borderRadius: 5,
  },
  duration: {
    color: "#053858",
    marginLeft: 900,
  },
});

function TodoTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <TableContainer elevation={0} className={classes.table} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">Start Time</StyledTableCell>
            <StyledTableCell align="center">End Time</StyledTableCell>

            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        </TableHead>

        <TableBody className={classes.tablerow}>
          {meetings.map((row) => (
            <React.Fragment>
              <StyledTableRow className={classes.root} key={row.id}>
                <StyledTableCell align="left">
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <MoreVertIcon /> : <MoreHorizIcon />}
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell>
                  <div style={{ textAlign: "center", color: "#053858" }}>
                    <Typography className={classes.date} variant="h5">
                      {row.date.day}{" "}
                    </Typography>
                    <Typography className={classes.month} variant="h6">
                      {row.date.month.substr(0, 3)}
                    </Typography>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div style={{ color: "#053858", marginLeft: 20 }}>
                    <Typography className={classes.name}>
                      {row.name}{" "}
                    </Typography>
                    <Typography className={classes.description}>
                      {row.description}
                    </Typography>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className={classes.time}>{row.startTime}</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className={classes.time}>{row.endTime}</div>{" "}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ebeff5",
                        padding: 5,
                        marginLeft: 30,
                      }}
                    >
                      <EditIcon color="secondary" />
                    </div>
                    <div
                      style={{
                        backgroundColor: "#ffcfcf",
                        padding: 5,
                      }}
                    >
                      <DeleteForeverIcon color="error" />
                    </div>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow></StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table
                        className={classes.table2}
                        size="small"
                        aria-label="purchases"
                      >
                        <TableHead>
                          <TableRow>
                            <NewTableCell></NewTableCell>
                            <NewTableCell></NewTableCell>
                            <NewTableCell> Agendas</NewTableCell>
                            <NewTableCell align="center">
                              {" "}
                              Duration
                            </NewTableCell>
                            <NewTableCell></NewTableCell>
                            <NewTableCell></NewTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.agendas.map((agenda) => (
                            <StyledTableRow key={agenda.id}>
                              <NewTableCell></NewTableCell>
                              <NewTableCell></NewTableCell>
                              <NewTableCell>{agenda.name}</NewTableCell>
                              <NewTableCell align="center">
                                {agenda.duration}
                              </NewTableCell>
                              <NewTableCell></NewTableCell>
                              <NewTableCell></NewTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </StyledTableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TodoTable;
