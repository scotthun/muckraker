import './Dashboard.css'
import TabMenu from './TabMenu.js'
import Typography from '@material-ui/core/Typography';

//consider using material ui tabs instead of slideshow
//then put things in divs and have them change their placement based on screen size
//https://stackoverflow.com/questions/35493833/stacking-columns-horizontally-on-wider-screens-and-vertically-on-smaller-screens
//https://material-ui.com/components/tabs/
//http://jsfiddle.net/cUCvY/1/
//https://stackoverflow.com/questions/14436800/two-divs-next-to-each-other-that-then-stack-with-responsive-change

export default function Dashboard(){

  return (
    <div id="dashboardContainer">
      <Typography variant='h3' id='dashboard'>Dashboard</Typography>
      <TabMenu />
    </div>
  );
}