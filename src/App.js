import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './components/leftPanel/leftPanel';
import './App.css';
import { AppBar, Box, Drawer, Hidden, IconButton, Switch, Typography } from '@material-ui/core';
import Routes from './routes';
import MenuIcon from '@material-ui/icons/Menu';
import { cyan, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3)
  },
  box: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [darkState, setDarkState] = useState(true);

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#20202a',
      A600: '#2c2c36',
      A700: '#8c8c8e',
    },
    secondary: {
      main: '#f7bb08',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
      fontFamily: 'Rubik'
    },
    body2: {
      color: '#8c8c8e'
    },
    subtitle2: {
      color: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      outlinedSecondary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: '#f7bb08'
        },
        borderRadius: 'unset'
      },
      containedPrimary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: '#f7bb08'
        },
        borderRadius: 'unset'
      }
    }
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: grey[200],
      A600: grey[100],
      A700: '#8c8c8e',
    },
    secondary: {
      main: cyan[600],
    },
  },
  typography: {
    allVariants: {
      color: grey[600],
      fontFamily: 'Rubik'
    },
    body2: {
      color: '#8c8c8e'
    },
    subtitle2: {
      color: grey[600]
    }
  },
  overrides: {
    MuiButton: {
      outlinedSecondary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: cyan[600]
        },
        borderRadius: 'unset'
      },
      containedPrimary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: cyan[600]
        },
        borderRadius: 'unset'
      }
    }
  },
});


  
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  
  const showDrawer = () => {
    return (
      <Drawer anchor="left" open={state} onClose={() => setState(false)}>
        <LeftPanel />
      </Drawer>
    )
  }

  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
    <AppBar color="primary">
      <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Typography variant="body2">
        Switch Theme
      </Typography>
      <Switch checked={darkState} onChange={handleThemeChange} />
      </Box>
    </AppBar>
    <div id="top" className={classes.root}>
      <Box bgcolor="primary.main" className={classes.box}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <Hidden mdDown>
              <LeftPanel />
            </Hidden>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setState(true)}
                edge="start"
              >
                <MenuIcon color="secondary" />
              </IconButton>
              {showDrawer()}
            </Hidden>
          </Grid>
          <Grid item lg={9} xs={12} >
            <Routes />
          </Grid>
        </Grid>
      </Box>
    </div>
    </ThemeProvider>
  )
}

export default App;