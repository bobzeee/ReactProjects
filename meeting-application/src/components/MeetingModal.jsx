import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MeetingsForm from "./MeetingsForm";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    marginTop: "-10px",
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: 0,
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 50,
    marginBottom: 50,
    marginRight: 70,
    borderRadius: 50,
    padding: "10px 30px",
    textTransform: "none",
  },
  paper: {
    padding: "10px 50px",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  dialog: {
    margin: "100px 0 0 160px",
  },
}));

const MeetingModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        color="secondary"
        disableElevation
        onClick={handleClickOpen}
      >
        Create a new todo
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        fullWidth
        className={classes.dialog}
        maxWidth={"md"}
        open={open}
      >
        <DialogTitle className={classes.paper} onClose={handleClose}>
          <Typography variant="h5">Create New Meeting </Typography>
        </DialogTitle>
        <DialogContent>
          <MeetingsForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MeetingModal;
