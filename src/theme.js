import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  type: "default",
  breakpoints,
  palette: {
    primary: {
      light: "#a5a7ab",
      main: "#EEF0F4",
      dark: "#1f373e",
      contrastText: "#fefefe",
    },
    secondary: {
      light: "#eebb98",
      main: "#ED9526",
      dark: "#9b5322",
      contrastText: "#fefefe",
    },
    feedback: { success: "#1F8B24", failed: "#DA100B" },
    contrastThreshold: 10,
    tonalOffset: 0.8,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          backgroundColor: "#F5F6FF",
        },
      },
    },
    MuiButton: {
      contained: {
        [breakpoints.down("sm")]: {
          width: "auto",
        },
      },
      root: {
        textTransform: "none",
        [breakpoints.down("sm")]: {
          fontSize: "0.6rem",
          padding: "10px 8px",
          minWidth: "50px",
        },
        [breakpoints.down("xs")]: {
          fontSize: "0.6rem",
          padding: "5px 5px",
          minWidth: "30px",
        },
      },
    },
    MuiIconButton: {
      root: {
        background: "linear-gradient(145deg, #CACCCF, #FFFFFF)",

        boxShadow: "9.91px 9.91px 15px #D9DADE, -9.91px -9.91px 15px #FFFFFF",
        [breakpoints.down("sm")]: {
          padding: "9px",
        },
        [breakpoints.down("xs")]: {
          padding: "6px",
        },
      },
    },
    MuiTypography: {
      h1: {
        [breakpoints.down("md")]: {
          fontSize: "4rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "3rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "2.5rem",
        },
      },
      h4: {
        [breakpoints.down("md")]: {
          fontSize: "1.9rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.6rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1.4rem",
        },
      },
      h6: {
        [breakpoints.down("md")]: {
          fontSize: "1.2rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1rem",
        },
      },
      subtitle1: {
        color: "#8890B5", //text light
        fontWeight: "600",
        [breakpoints.down("xs")]: {
          fontSize: "0.8rem",
        },
      },
      subtitle2: {
        [breakpoints.down("xs")]: {
          fontSize: "0.7rem",
        },
      },
    },
    MuiPaper: {
      elevation0: {
        background: "#EEF0F4",
        backgroundColor: "#EEF0F4",
        boxShadow:
          "inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF;",
      },
    },
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    htmlFontSize: 16,
    color: "#212121",
  },
});

export default theme;
