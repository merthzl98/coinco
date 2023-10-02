import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f051d",
    },
    secondary: {
      main: "rgba(1 ,1 ,1 ,0.5)",
    },
    error: {
      main: red.A400,
    },

    success: {
      main: green.A400,
    },

    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: "inherit",
    fontWeightRegular: "bolder",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 32 },
      },
    },
  },
});

export default theme;
