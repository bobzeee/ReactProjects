import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f5f6f7",
      main: "#ebeff5",
    },
    secondary: {
      main: "#053858",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    h5: {
      fontFamily: "Open Sans",
      fontSize: "19px",
      fontWeight: 300,
    },
    h6: {
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontWeight: 600,
    },
  },
});

export default theme;
