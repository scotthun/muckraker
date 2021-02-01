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
import './TabMenu.css'
import Spacer from './Spacer.js'
import {data, pieData} from './BarChart.js'
import {arrHouseVoteObjects, arrSenateVoteObjects} from '../data/prepare_data.js'
import StackedBarChart from './StackedBarChart.js'
import PieChart from './PieChart.js'

//use chartjs https://www.chartjs.org/samples/latest/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className="boxDiv"
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
    margin:0,
    padding:0,
  },
}));

export default function TabMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [currBill, setCurrBill] = React.useState("");
  
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
        alignItems="center"
      >
        <InputLabel>Bill ID: </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            className={classes.selector}
            onChange={handleCurrBill}
            //Create menuitems with map
          >
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Ten</Typography></MenuItem>
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Twenty</Typography></MenuItem>
          <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Thirty</Typography></MenuItem>
        </Select>
      </Grid>
      <Spacer />
      <div className="wrap">
        <div className="one"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
        <div className="three"></div>
        <div className="two" id="pieStacked">
         <PieChart data={arrHouseVoteObjects[0]} />
        </div>
      </div>
      <div className="wrap">
        <div className="one"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
        <div className="three"></div>
        <div className="two" id="stacked">
          <StackedBarChart data={arrHouseVoteObjects[0]} />
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid 
          container
          direction="row"
          alignItems="center"
        >
          <InputLabel>Bill ID: </InputLabel>
          <Select
              labelId="demo-simple-select-label"
              className={classes.selector}
              onChange={handleCurrBill}
              label="Hello"
            >
            <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Ten</Typography></MenuItem>
            <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Twenty</Typography></MenuItem>
            <MenuItem className={classes.selection} value={"Put bill id here"}><Typography variant="body1" className={classes.selectionText}>Thirty</Typography></MenuItem>
          </Select>
        </Grid>
        <Spacer />
        <div className="wrap">
          <div className="one"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
          <div className="three"></div>
          <div className="two"></div>
        </div>
        <div className="wrap">
          <div className="one"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
          <div className="three"></div>
          <div className="two"></div>
        </div>
      </TabPanel>
    </div>
  );
}
