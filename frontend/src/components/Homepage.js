import React from "react";
import Layout from './Layout.js'
import Dashboard from './Dashboard.js'
import Introduction from './Introduction.js'
import Spacer from './Spacer.js'
import LookupLegislators from './LookupLegislators.js'

export default class Homepage extends React.Component {
  constructor(props) {
      super(props);
      
      
  }

  render() {
      return (
          <Layout>
            <Spacer/>
            <Introduction />
            <Spacer/>
            <div id="dashboard"></div>
            <Spacer/>
            <Dashboard />
            <div id='legislators'></div>
            <Spacer />
            <LookupLegislators />
          </Layout>
      );
  }


}