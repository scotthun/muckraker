import './Dashboard.css'
import TabMenu from './TabMenu.js'
import Typography from '@material-ui/core/Typography';

export default function Dashboard(props){

  return (
    <div id="dashboardContainer">
      <Typography variant='h3' >Votes Dashboard</Typography>
      <TabMenu />
      {/*props.data*/}
    </div>
  );
}