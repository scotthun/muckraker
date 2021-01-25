import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'
import StackedBar from './StackedBar.js'

export default function Dashboard(){


  return (
    <div id="dashboardContainer">
            <Tabs>
              <TabList>
                <Tab>House</Tab>
                <Tab>Senate</Tab>
              </TabList>

              <TabPanel>
                <table width = "100%">
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
              </TabPanel>
              <TabPanel>
                <h2>Senate</h2>
              </TabPanel>
            </Tabs>
    </div>
  );
}