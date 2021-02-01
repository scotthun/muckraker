import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'
import Spacer from './Spacer.js'
import TabMenu from './TabMenu.js'


//consider using material ui tabs instead of slideshow
//then put things in divs and have them change their placement based on screen size
//https://stackoverflow.com/questions/35493833/stacking-columns-horizontally-on-wider-screens-and-vertically-on-smaller-screens
//https://material-ui.com/components/tabs/
//http://jsfiddle.net/cUCvY/1/
//https://stackoverflow.com/questions/14436800/two-divs-next-to-each-other-that-then-stack-with-responsive-change

export default function Dashboard(){

  return (
    <div id="dashboardContainer">
            <TabMenu />
    </div>
  );
}