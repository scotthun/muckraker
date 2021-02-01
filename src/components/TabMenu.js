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
import Spacer from './Spacer.js'
import './TabMenu.css'
import {data, pieData} from './BarChart.js'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'

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
        <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsLinkOffset={-24}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
        </div>
      </div>
      <div className="wrap">
        <div className="one"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
        <div className="three"></div>
        <div className="two" id="stacked">
        <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich' ]}
        indexBy="vote"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={["#0015BC", "#E9141D", "#000000"]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Vote type',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number of Votes',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#ffffff"
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
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
