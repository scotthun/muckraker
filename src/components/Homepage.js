import React from "react";
import Layout from './Layout.js'
import Dashboard from './Dashboard.js'
import Spacer from './Spacer.js'
import {data} from '../data/prepare_data.js'


export default class Homepage extends React.Component {
  constructor(props) {
      super(props);
      
      
  }

  render() {
      return (
          <Layout>
            <div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
            <Spacer />
            <Dashboard />
          </Layout>
      );
  }


}