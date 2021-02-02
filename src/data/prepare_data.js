


var membersSenate = require('./current_members_senate.json');
membersSenate = membersSenate["results"][0]["members"];
//console.log(memebrsSenate);

var membersHouse = require('./current_members_house.json');
membersHouse = membersHouse["results"][0]["members"];
//console.log(membersHouse);

var recentVotesSentate = require('./recent_votes_senate.json');
recentVotesSentate = recentVotesSentate["results"]["votes"];
//console.log(recentVotesSentate)

var recentVotesHouse = require('./recent_votes_house.json');
recentVotesHouse = recentVotesHouse["results"]["votes"];
//console.log(recentVotesHouse)


class VoteData {
  constructor(voteObject) {
      this.voteObject = voteObject;
  }

  getPartyKeys() {
    return ["Independent", "Republican", "Democrat"];
  }

  getVoteTypeKeys() {
    return ["Y", "N", "NV", "P"]
  }

  transformFriendlyKeyToObjectKey(friendlyKey){
    var objectKey;
    switch (friendlyKey) {
      case "Y":
        objectKey = "yes";
        break;
      case "N":
        objectKey = "no";
        break;
      case "NV":
        objectKey = "not_voting";
        break;
      case "P":
        objectKey = "present";
        break;
      case "Independent":
        objectKey = "independent";
        break;
      case "Republican":
        objectKey = "republican";
        break;
      case "Democrat":
        objectKey = "democratic";
    }
    return objectKey;
  }

  getBarData() {
    var chartData = new Array();

    for(let key of  this.getVoteTypeKeys()){
      var dataElement = new Object();
      dataElement["vote"] = key;
      for(let party of this.getPartyKeys()){
        var lookupPartyKey = this.transformFriendlyKeyToObjectKey(party);
        var lookupVoteKey = this.transformFriendlyKeyToObjectKey(key);
        var numVotes = this.voteObject[lookupPartyKey][lookupVoteKey];  
        dataElement[party] = numVotes;
      }
      chartData.push(dataElement);
    }
    return chartData;
  }

  getPieData() {
    var chartData = new Array();

    for(let key of  this.getVoteTypeKeys()){
      var dataElement = new Object();
      dataElement["id"] = key;
      dataElement["label"] = key;
      var totalVotes = this.voteObject["total"];
      var lookupVoteKy = this.transformFriendlyKeyToObjectKey(key);
      
      dataElement["value"] = totalVotes[lookupVoteKy]

      chartData.push(dataElement);
    }
    return chartData;
  }
  

  getSummaryData() {

  }
  
}

class MemberData {
  constructor(memberObject) {
      this.memberObject = memberObject;
  }

  getMemberData() {

    var member= new Object();
    var middleName = this.memberObject.middle_name === null ? " " : (" " + this.memberObject.middle_name + " ");
    member["name"] = this.memberObject.first_name +  middleName +  this.memberObject.last_name;
    member["id"] = this.memberObject.id;
    return member;
  }
  
}

var arrSenateVoteObjects = new Array();
for (let index of Object.keys(recentVotesSentate) ){
  let vote =  new VoteData(recentVotesSentate[index]);
  arrSenateVoteObjects.push(vote);
  
  //console.log(vote.getPieData());
  //console.log(vote.getPieData());
  //console.log(vote.getVoteDataset("democratic", "bar"));
  //console.log(vote.getVoteDataset("republican", "bar"));
  //console.log(vote.getVoteDataset("independent", "bar"));
  //console.log(vote.getVoteDataset("total", "pie"));
  //break;
  
}

var arrHouseVoteObjects = new Array();
for (let index of Object.keys(recentVotesHouse) ){
  let vote =  new VoteData(recentVotesHouse[index]);
  arrHouseVoteObjects.push(vote);
  /*
  console.log(vote.getBarData());
  console.log(vote.getPieData());
  console.log(vote.getVoteDataset("democratic", "bar"));
  console.log(vote.getVoteDataset("republican", "bar"));
  console.log(vote.getVoteDataset("independent", "bar"));
  console.log(vote.getVoteDataset("total", "pie"));
  break;
  */
}

var arrMembersSenate = new Array();
for(let index of membersSenate) {
  let member = new MemberData(index);
  arrMembersSenate.push(member.getMemberData());
  //console.log (member.getMemberData());
  //break;
}

var arrMembersHouse = new Array();
for(let index of membersHouse) {
  let member = new MemberData(index);
  arrMembersHouse.push(member.getMemberData());
  //console.log (member.getMemberData());
  //break;
}

export {arrHouseVoteObjects}
export {arrSenateVoteObjects}
export {arrMembersHouse}
export {arrMembersSenate}

var data = require('./hello.json');
data = data["message"];
export {data}

/*
import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

var dude = new Chart(".chart", {
  // or DOM element
  data: {
    labels: ["YES", "NO"],
    datasets: [
      {
        name: "Democrat",
        chartType: "bar",
        values: [40, 10]
      },
      {
        name: "Republican",
        chartType: "bar",
        values: [10, 40]
      }
    ]
  },

  title: "My Awesome Chart",
  type: "bar", // or 'bar', 'line', 'pie', 'percentage'
  height: 500,
  colors: ["#0015BC", "#FF0000"],
  axisOptions: {
    xIsSeries: true
  },
  barOptions: {
    stacked: true,
    spaceRatio: 0.5
  },
  tooltipOptions: {
    formatTooltipX: (d) => (d + "").toUpperCase(),
    formatTooltipY: (d) => d + " pts"
  }
});

//dude.removeDataPoint(0)

export { dude };


*/

/*
import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

new Chart("#chart", {
  // or DOM element
  data: {
    labels: ["YES", "NO", "PRESENT", "NOT VOTING"],

    datasets: [
      {
        name: "Some Data",
        chartType: "pie",
        values: [25, 40, 30, 35]
      }
    ]
  },

  title: "My Awesome Pie Chart",
  type: "pie", // or 'bar', 'line', 'pie', 'percentage'
  height: 500,
  colors: ["purple", "#ffa3ef", "light-blue", "red"],
  axisOptions: {
    xAxisMode: "tick",
    xIsSeries: true
  },
  barOptions: {
    stacked: false,
    spaceRatio: 1.0
  },
  tooltipOptions: {
    formatTooltipX: (d) => (d + "").toUpperCase(),
    formatTooltipY: (d) => d + " pts"
  }
});


*/