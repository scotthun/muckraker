import './Dashboard.css'
import TabMenu from './TabMenu.js'
import Typography from '@material-ui/core/Typography';

export default function Dashboard(){

  return (
    <div id="dashboardContainer">
      <Typography variant='h3' id='dashboard'>Dashboard</Typography>
      <TabMenu />
    </div>
  );
}