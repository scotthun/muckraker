import React, { useState, useEffect  } from 'react';
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
import {
        arrHouseVoteObjects, arrSenateVoteObjects,
        recentVotesHouse, recentVotesSentate, 
        generateLegislatorData
       } from '../data/prepare_data.js'
import StackedBarChart from './StackedBarChart.js'
import PieChart from './PieChart.js'
import VoteSearchBar from './VoteSearchBar.js'
import VoteSummary from './VoteSummary.js'

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
          {children}
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
    with:'100%',
    padding :0,
  },
  selection:{
  },
  selectionText:{

  },
}));


export default function TabMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [currVoteHouse, setCurrVoteHouse] = React.useState(0);
  const [currVoteSenate, setCurrVoteSenate] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCurrVoteHouse = (event, newValue) => {
    setCurrVoteHouse(event.target.value);
  };

  const handleCurrVoteSenate = (event, newValue) => {
    setCurrVoteSenate(event.target.value);
  };

  useEffect(() => {
    //console.log('postObject',props?.data)
  },[props?.data]);

  function generateLegendHints(voteObject) {
    return Object.keys(voteObject.getLegendHints()).map((key, index) => 
           key + " - " + voteObject.getLegendHints()[key].replace("_", " ") + 
           (index === (Object.keys(voteObject.getLegendHints()).length-1) ? "" : ", "
    )); 
  }

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
        <InputLabel>Vote ID: </InputLabel>
        <Select
            labelId="demo-simple-select"
            className={classes.selector}
            onChange={handleCurrVoteHouse}
            value={currVoteHouse}
          >
           {arrHouseVoteObjects.map((voteObject, index) =>
            <MenuItem className={classes.selection} value={index} key={index}>{arrHouseVoteObjects[index].getSelectBarText()}</MenuItem>
           )}
        </Select>
      </Grid>
      <Spacer />
      <div className="wrap">
        <div className="one">
          <VoteSummary data={arrHouseVoteObjects[currVoteHouse].getSummaryData()} />
        </div>
        <div className="three"></div>
        <div className="two">
        <Typography variant="h5" align="center">
            Vote count
        </Typography>
        <Typography variant="body1" align="center">
            {generateLegendHints(arrHouseVoteObjects[currVoteHouse])}
          </Typography>
         <PieChart data={arrHouseVoteObjects[currVoteHouse]} />
        </div>
      </div>
      <Spacer />
      <div className="wrap">
        <div className="one">
          <VoteSearchBar members={generateLegislatorData(props.data["membersHouse"])} type="Representative" chamberVotes={recentVotesHouse} source={arrHouseVoteObjects[currVoteHouse].getSourceURL()}/>
        </div>
        <div className="three"></div>
        <div className="two">
          <Typography variant="h5" align="center">
            Vote breakdown by party
          </Typography>
          <Typography variant="body1" align="center">
            {generateLegendHints(arrHouseVoteObjects[currVoteHouse])}
          </Typography>
          <StackedBarChart data={arrHouseVoteObjects[currVoteHouse]} />
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid 
          container
          direction="row"
          alignItems="center"
        >
          <InputLabel>Vote ID: </InputLabel>
          <Select
              labelId="demo-simple-select-label"
              className={classes.selector}
              label="Hello"
              onChange={handleCurrVoteSenate}
              value={currVoteSenate}
            >
            {arrSenateVoteObjects.map((voteObject, index) =>
            <MenuItem className={classes.selection} value={index} key={index}>{arrSenateVoteObjects[index].getSelectBarText()}</MenuItem>
            )}
          </Select>
        </Grid>
        <Spacer />
        <div className="wrap">
          <div className="one">
            <VoteSummary data={arrSenateVoteObjects[currVoteSenate].getSummaryData()}/>
          </div>
          <div className="three"></div>
          <div className="two">
          <Typography variant="h5" align="center">
            Vote count
          </Typography>
          <Typography variant="body1" align="center">
            {generateLegendHints(arrSenateVoteObjects[currVoteSenate])}
          </Typography>
            <PieChart data={arrSenateVoteObjects[currVoteSenate]} />
          </div>
        </div>
        <Spacer />
        <div className="wrap">
          <div className="one">
              <VoteSearchBar members={generateLegislatorData(props.data["membersSenate"])} type="Senator" chamberVotes={recentVotesSentate} source={arrSenateVoteObjects[currVoteSenate].getSourceURL()}/>
          </div>
          <div className="three"></div>
          <div className="two">
            <Typography variant="h5" align="center">
              Vote breakdown by party
            </Typography>
            <Typography variant="body1" align="center">
             {generateLegendHints(arrSenateVoteObjects[currVoteSenate])}
            </Typography>
            <StackedBarChart data={arrSenateVoteObjects[currVoteSenate]} />
          </div>
        </div>
      </TabPanel>
      <Spacer />
      <Spacer />
    </div>
  );
}
