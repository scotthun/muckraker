import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'
import StackedBar from './StackedBar.js'
import Spacer from './Spacer.js'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import './slider.css'

//consider using material ui tabs instead of slideshow
//then put things in divs and have them change their placement based on screen size
//https://stackoverflow.com/questions/35493833/stacking-columns-horizontally-on-wider-screens-and-vertically-on-smaller-screens
//https://material-ui.com/components/tabs/
//http://jsfiddle.net/cUCvY/1/
//https://stackoverflow.com/questions/14436800/two-divs-next-to-each-other-that-then-stack-with-responsive-change

export default function Dashboard(){

  return (
    <div id="dashboardContainer">
            <Tabs>
              <TabList>
                <Tab>House</Tab>
                <Tab>Senate</Tab>
              </TabList>
              <TabPanel>
                <div>
                <AwesomeSlider className="aws-btn">
                  <div>
                  <table width="100%" height="100%">
                    <tr>
                      <td>
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      </td>
                      <td>
                      <StackedBar />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <StackedBar />
                      </td>
                      <td>
                      <StackedBar />
                      </td>
                    </tr>
                  </table>
                  </div>
                  <div>
                  <table width = "100%" height="100%">
                    <tr>
                      <td>
                      <StackedBar />
                      </td>
                      <td>
                      <StackedBar />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <StackedBar />
                      </td>
                      <td>
                      <StackedBar />
                      </td>
                    </tr>
                  </table>
                  </div>
                </AwesomeSlider>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Senate</h2>
              </TabPanel>
            </Tabs>
    </div>
  );
}