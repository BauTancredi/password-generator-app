import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24232B",
    },
    secondary: {
      main: "#A4FFAF",
    },
  },
  typography: {
    fontFamily: "monospace",
    h1: {
      fontSize: 30,
      color: "#778380",
    },
    h3: {
      fontSize: 24,
      color: "#778380",
    },
    body1: {
      fontSize: 16,
      color: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#A4FFAF",
          width: "100%",
          color: "#24232B",
          fontSize: 16,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#A4FFAF",
            color: "#24232B",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#A4FFAF",
          marginBottom: ".5rem",
          marginTop: ".5rem",
          width: "95%",
        },
        rail: {
          color: "#000",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#A4FFAF",
          paddingLeft: 0,
          "&.Mui-checked": {
            color: "#A4FFAF",
          },
        },
      },
    },
  },
});

export default theme;
