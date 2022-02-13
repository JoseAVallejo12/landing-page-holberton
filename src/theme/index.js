// @ts-nocheck
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


const colorPalette = {
  primary: '#F29F05',
  secondary: '#F2A341',
  background: '#A6A6A6',
  text: '#F2F2F2',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
}

export default createTheme({
  palette: {
    primary: {
      main: colorPalette.primary,
      contrastText: colorPalette.text,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colorPalette.text,
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: colorPalette.primary,
        },
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: colorPalette.text,
        },
      },
    }
  },
});
