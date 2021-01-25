import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'

export default function Dashboard(){


  return (
    <div id="dashboardContainer">
            <Tabs>
              <TabList>
                <Tab>House</Tab>
                <Tab>Senate</Tab>
              </TabList>

              <TabPanel>
                <h2>House</h2>
              </TabPanel>
              <TabPanel>
                <h2>Senate</h2>
              </TabPanel>
            </Tabs>
    </div>
  );
}