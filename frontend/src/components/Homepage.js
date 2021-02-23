import React, { useState, useEffect  } from 'react';
import Layout from './Layout.js'
import Dashboard from './Dashboard.js'
import Introduction from './Introduction.js'
import Spacer from './Spacer.js'
import LookupLegislators from './LookupLegislators.js'

export default function Homepage() {

  function getDataFromBackend(requestType){
    let url = require('../data/key.json');
    var data = {};
    url = url['url']+ '/' + requestType;
    console.log(url)
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

  function getDataObject(){
    let data = new Object();
    data["membersSenate"] = membersSenate;
    data["membersHouse"] = membersHouse;
    data["votesSenate"] = votesSenate;
    data["votesHouse"] = votesHouse;
    return data;
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
      <Dashboard data={getDataObject()} />
      <div id='legislators'></div>
      <Spacer />
      <LookupLegislators data={getDataObject()}/>
    </Layout>
  );
}