import React, { useLayoutEffect, useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Spacer from './Spacer.js'
import VoteSummary from './VoteSummary.js'
import MemberData, {arrMembersAll} from '../data/prepare_data.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  activeMember: {
    width: '100%',
    display: 'block',
  },
  inactiveMember: {
    display:'none',
  },
  centeredImage: {
    display: 'block',
    margin: '0 auto',
  }

}));


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let width, height = 0;
      if(window.innerWidth >=500){
        width = 450;
        height = 550;
      }

      else if(window.innerWidth < 500){
        width = 225;
        height = 275;
      }

      setSize([width, height]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export default function LookupModule(){

  const [currMemberID, setCurrMemberID] = React.useState(arrMembersAll[0].id);
  const [currMemberName, setCurrMemberName] = React.useState(arrMembersAll[0].name);
  const [currMember, setCurrMember] = React.useState(arrMembersAll[0]);
  const [width, height] = useWindowSize();

  useEffect(() => {
    //console.log("Hello from the LookupModule")
  });

  const handleCurrMemberID = (event, value) => {
    var newMember = value === null ? "" : value.id;
    setCurrMemberID(newMember);

    var newMemberName = value === null ? "" : value.name;
    setCurrMemberName(newMemberName);
    setCurrMember(value);
  };

 const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" align='center'> Use the search bar below to see the voting profile of a specific legislator</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
              options={arrMembersAll}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Legislator" variant="outlined" />}
              onChange={handleCurrMemberID}
              disableClearable={true}
          />
        </Grid>
      </Grid>
      <Grid container ></Grid>
      <Spacer />
      <div>
        <Typography variant="h5" align='center'>{currMemberName}</Typography>
        {currMember !== null ?   <img className={classes.centeredImage} src={"https://theunitedstates.io/images/congress/"+ width+"x"+ height +"/"+ currMemberID +".jpg"} align="center"/> : <div></div>}
        {currMember !== null ? <div style={{width: width + "px", display: 'block', margin: '0 auto'}}><VoteSummary data={currMember}/></div> : <div></div>}
      </div>
    </div>
  );

}