import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
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
  innerTable: {
    minWidth: 200,
    overflow: "hidden",
  },
  agendaHeader: {
    fontSize: 16,
    fontWeight: 600,
  },
  agendaBody: {
    fontSize: 14,
    fontWeight: 300,
  },
});

function MeetingsTableRow({ row, onDelete, index }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MoreVertIcon /> : <MoreHorizIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <div style={{ textAlign: "center", color: "#053858" }}>
            <Typography className={classes.date} variant="h5">
              {row.date.day}{" "}
            </Typography>
            <Typography className={classes.month} variant="h6">
              {row.date.month.substr(0, 3)}
            </Typography>
          </div>
        </TableCell>
        <TableCell align="left">
          <div style={{ color: "#053858", marginLeft: 20 }}>
            <Typography className={classes.name}>{row.name} </Typography>
            <Typography className={classes.description}>
              {row.description}
            </Typography>
          </div>
        </TableCell>
        <TableCell align="center">
          <div className={classes.time}>{row.startTime}</div>
        </TableCell>
        <TableCell align="center">
          <div className={classes.time}>{row.endTime}</div>
        </TableCell>
        <TableCell align="right">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton>
              <div
                style={{
                  backgroundColor: "#ebeff5",
                  padding: 5,
                  marginLeft: 30,
                }}
              >
                <EditIcon color="secondary" />
              </div>
            </IconButton>
            <IconButton onClick={() => onDelete(index)}>
              <div
                style={{
                  backgroundColor: "#ffcfcf",
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                <DeleteForeverIcon color="error" />
              </div>
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            <Box margin={1}>
              <Table
                className={classes.innerTable}
                size="small"
                aria-label="purchases"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <Typography
                        color="secondary"
                        className={classes.agendaHeader}
                      >
                        Agenda
                      </Typography>{" "}
                    </TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.agendas.map((agenda) => (
                    <TableRow key={agenda.id}>
                      <TableCell align="left">
                        <Typography
                          color="secondary"
                          className={classes.agendaBody}
                        >
                          {agenda.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          color="secondary"
                          className={classes.agendaBody}
                        >
                          {" "}
                          {agenda.duration}{" "}
                        </Typography>{" "}
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            backgroundColor: "#ffcfcf",
                            padding: 5,
                          }}
                        >
                          <Typography color="error">DELETE</Typography>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

MeetingsTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    agendas: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
};

export default MeetingsTableRow;
