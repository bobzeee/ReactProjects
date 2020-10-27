import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateRangeIcon from "@material-ui/icons/DateRange";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    padding: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginTop: -6,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#fcfdff",
    paddingLeft: 10,
    color: theme.palette.secondary.main,
    border: 0,
  },
  textfield: {
    marginTop: 15,
    width: "50px",
    textAlign: "center",
    backgroundColor: "#fcfdff",
  },
  meeting: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "#f7f8fb",
    alignSelf: "center",
  },
  agendaBtn: {
    marginTop: theme.spacing(5),
    padding: "10px 25px",
    textTransform: "none",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
  },
  createBtn: {
    marginTop: 50,
    marginBottom: 50,
    marginRight: 70,
    borderRadius: 50,
    padding: "10px 30px",
    alignSelf: "flex-end",
  },
}));

const MeetingsForm = ({ handleClose }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [checked, setChecked] = useState(true);
  const [agendaRows, setAgendaRows] = useState([
    { agendaName: "", agendaDuration: "" },
  ]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAgendaInput = (index, event) => {
    const values = [...agendaRows];
    values[index][event.target.name] = event.target.value;
    setAgendaRows(values);
  };

  const handleAddAgendaRow = () => {
    setAgendaRows([...agendaRows, { agendaName: "", agendaDuration: "" }]);
  };

  const handleDeleteAgendaRow = (index) => {
    const values = [...agendaRows];
    values.splice(index, 1);
    setAgendaRows(values);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              backgroundColor: "#ebeff5",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper elevation={0} square className={classes.form}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container item justify="space-evenly">
                  <Grid item xs={12} md={3}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      style={{ width: "70%" }}
                      margin="normal"
                      id="date-picker-inline"
                      label="DATE"
                      className={classes.input}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      keyboardIcon={<DateRangeIcon color="secondary" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="START TIME"
                      className={classes.input}
                      style={{ width: "70%" }}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      keyboardIcon={<WatchLaterIcon color="secondary" />}
                    />
                  </Grid>
                  <Grid container item xs={12} md={3}>
                    <TextField
                      label="Mins"
                      type="number"
                      className={classes.textfield}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <KeyboardTimePicker
                      disabled
                      margin="normal"
                      id="time-picker"
                      style={{ width: "70%" }}
                      label="END TIME"
                      className={classes.input}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      keyboardIcon={<WatchLaterIcon />}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} md={10}>
                  <TextField
                    className={classes.meeting}
                    label="Meeting Title"
                  />
                </Grid>
                <Grid container xs={12} md={10}>
                  <TextField
                    className={classes.meeting}
                    label="Meeting Description"
                    multiline
                    rows={3}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Paper>
            <Paper
              elevation={0}
              style={{ marginTop: "10px", padding: "10px 50px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    onChange={handleChange}
                    color="secondary"
                  />
                }
                label={
                  <Typography color="secondary" variant="h6">
                    My total duration should be automatically calculated{" "}
                  </Typography>
                }
              />

              <form>
                {agendaRows.map((agendaRow, index) => (
                  <Grid key={index} container justify="space-between">
                    <Grid item xs={12} md={9}>
                      <TextField
                        name="agendaName"
                        value={agendaRow.agendaName}
                        className={classes.meeting}
                        label="Agenda Name"
                        onChange={(event) => handleAgendaInput(index, event)}
                      />
                    </Grid>

                    <Grid item xs={6} md={2}>
                      <TextField
                        value={agendaRow.agendaDuration}
                        name="agendaDuration"
                        type="number"
                        className={classes.meeting}
                        label="Duration"
                        onChange={(event) => handleAgendaInput(index, event)}
                      />
                    </Grid>

                    <div
                      style={{
                        backgroundColor: "#ffcfcf",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                      }}
                    >
                      <IconButton onClick={() => handleDeleteAgendaRow(index)}>
                        <DeleteForeverIcon color="error" />
                      </IconButton>
                    </div>
                  </Grid>
                ))}

                <Button
                  className={classes.agendaBtn}
                  variant="outlined"
                  color="secondary"
                  startIcon={<AddOutlinedIcon />}
                  onClick={() => handleAddAgendaRow()}
                >
                  <Typography variant="h6">New Agenda</Typography>
                </Button>
              </form>
            </Paper>
            <Button
              className={classes.createBtn}
              variant="contained"
              color="secondary"
              disableElevation
              onClick={handleClose}
            >
              Create
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MeetingsForm;
