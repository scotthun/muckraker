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
            <Spacer />
            <Dashboard />
            <Spacer />
          </Layout>
      );
  }


}