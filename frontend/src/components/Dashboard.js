import React, { useEffect  } from 'react';
import TabMenu from './TabMenu.js'
import Typography from '@material-ui/core/Typography';
import './Dashboard.css'

export default function Dashboard(props){

  useEffect(() => {
    //console.log('postObject',props?.data) 
  },[props?.data]);

  return (
    <div id="dashboardContainer">
      <Typography variant='h3' >Votes Dashboard</Typography>
      <TabMenu data={props.data}/>
      {/*props.data*/}
    </div>
  );
}