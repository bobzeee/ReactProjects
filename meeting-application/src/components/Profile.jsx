import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import TodoTable from "./TodoTable";

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
  button: {
    alignSelf: "flex-end",
    marginTop: 50,
    marginBottom: 50,
    marginRight: 70,
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: "none",
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography color="secondary" className={classes.sub}>
        Here are your Tasks for Today
      </Typography>
      <Paper elevation={0} className={classes.table}>
        {/* <TodoTable /> */}
      </Paper>
      <Button
        variant="contained"
        className={classes.button}
        color="secondary"
        disableElevation
      >
        Create a new todo
      </Button>
    </Paper>
  );
};

export default Profile;

// import React from "react";

// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile</h1>
//     </div>
//   );
// };

// export default Profile;
