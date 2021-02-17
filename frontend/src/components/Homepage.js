import React, { useLayoutEffect, useState, useEffect  } from 'react';import Layout from './Layout.js'
import Dashboard from './Dashboard.js'
import Introduction from './Introduction.js'
import Spacer from './Spacer.js'
import LookupLegislators from './LookupLegislators.js'

export default function Homepage() {

  function getDataFromBackend(requestType){
    let url = require('../data/key.json');
    var data = {};
    url = url['url']+ '/' + requestType;
    fetch(url)
    .then(async (response) => {
      data = await response.json();
      callStateSetter(data, requestType);
    });
  };

  function callStateSetter(data, requestType){

    if(requestType === "getSenators"){
      setMembersSenate(data);
    }

    else if(requestType === "getRepresentatives"){
      setMembersHouse(data);
    }
    
    else if(requestType === "getSenateVotes"){
      setVotesSenate(data);
    }

    else if(requestType === "getHouseVotes"){
      setVotesHouse(data);
    }
    
  }

  const [membersSenate, setMembersSenate] = useState(null);
  const [membersHouse, setMembersHouse] = useState(null);
  const [votesSenate, setVotesSenate] = useState(null);
  const [votesHouse, setVotesHouse] = useState(null);

  useEffect(() => {
    getDataFromBackend("getSenators");
    getDataFromBackend("getRepresentatives");
    getDataFromBackend("getSenateVotes");
    getDataFromBackend("getHouseVotes");
  }, []);

  return (
    <Layout>
      <Spacer/>
      <Introduction />
      <Spacer/>
      <div id="dashboard"></div>
      <Spacer/>
      <Dashboard data={JSON.stringify(membersSenate) + JSON.stringify(membersHouse) + JSON.stringify(votesSenate) + JSON.stringify(votesHouse)} />
      <div id='legislators'></div>
      <Spacer />
      <LookupLegislators />
    </Layout>
  );
}