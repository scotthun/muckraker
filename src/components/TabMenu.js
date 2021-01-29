import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import StackedBar from './StackedBar.js'
import Spacer from './Spacer.js'
import './TabMenu.css'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  selector:{
    minWidth: 300,
  },
  selection:{
    textAlign: 'center',
  },
  selectionText:{
    width: "100%",
    textAlign: "center",
  },
}));

export default function TabMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [currBill, setCurrBill] = React.useState("Dicks");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCurrBill = (event, newValue) => {
    setCurrBill(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="House" {...a11yProps(0)} />
          <Tab label="Senate" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Spacer />
      <TabPanel value={value} index={0}>
      <Grid 
        container
        direction="row"
        justify="left"
        alignItems="center"
      >
        <InputLabel>Bill ID: </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className={classes.selector}
            onChange={handleCurrBill}
          >
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Ten</Typography></MenuItem>
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Twenty</Typography></MenuItem>
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Thirty</Typography></MenuItem>
        </Select>
      </Grid>
      <Spacer />
      <div class="wrap">
        <div class="one"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        <div class="three"></div>
        <div class="two"><StackedBar /></div>
      </div>
      <div class="wrap">
        <div class="one"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        <div class="three"></div>
        <div class="two"><StackedBar /></div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid 
          container
          direction="row"
          justify="left"
          alignItems="center"
        >
          <InputLabel>Bill ID: </InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={classes.selector}
              onChange={handleCurrBill}
              >
              <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Ten</Typography></MenuItem>
              <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Twenty</Typography></MenuItem>
              <MenuItem className={classes.selection} value={"Put bill id here"}><Typography className={classes.selectionText}>Thirty</Typography></MenuItem>
          </Select>
        </Grid>
        <Spacer />
        <div class="wrap">
          <div class="one"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          <div class="three"></div>
          <div class="two"><StackedBar /></div>
        </div>
        <div class="wrap">
          <div class="one"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          <div class="three"></div>
          <div class="two"><StackedBar /></div>
        </div>
      </TabPanel>
    </div>
  );
}
