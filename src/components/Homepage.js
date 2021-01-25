import React from "react";
import 'react-tabs/style/react-tabs.css';
import Layout from './Layout.js'
import Dashboard from './Dashboard.js'
import {data} from '../data/prepare_data.js'


export default class Homepage extends React.Component {
  constructor(props) {
      super(props);
      
      
  }

  render() {
      return (
          <Layout>
            <Dashboard />
          </Layout>
      );
  }


}