import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#cf9fff",
    },
    secondary: {
      main: "#E19133",
    },
    text: {
      primary: "#191b33",
      secondary: "#cf9fff",
    },
  },
  typography: {
    fontFamily: "'Lexend Deca',sans-serif, 'Poppins'",
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontWeight: "700",
          fontSize: "1rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#191b33",
          fontSize: 14,
        },
      },
    },
  },
});
