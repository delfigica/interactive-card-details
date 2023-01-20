import { createTheme } from "@mui/material";

const colors = {
    violet: 'hsl(278, 68%, 11%)',
    red: 'hsl(0, 100%, 66%)',
    white: "hsl(0, 0%, 100%)",
  };

export const theme = createTheme({
    typography: {
        fontFamily: 'Space Grotesk, sans-serif'
    },
    palette: {
      primary: {
        main: colors.violet,
      },
      error: {
          main: colors.red
      },
      secondary: {
          main: colors.white
      }
    },
  });