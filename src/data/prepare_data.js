


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

  getPieData() {
    var chartData = new Object();
    chartData["labels"] = ["YES", "NO", "PRESENT", "ABSTAIN"];
    var datasets = new Array();
    
    datasets.push(this.getVoteDataset("total", "pie"));
    

    chartData["datasets"] = datasets;
    return chartData;
  }

  getBarData() {
    var chartData = new Object();
    chartData["labels"] = ["YES", "NO", "PRESENT", "ABSTAIN"];
    var datasets = new Array();
    let partyNames = ["Democratic", "Republican", "Independent"];
    for(let partyName of partyNames){
      datasets.push(this.getVoteDataset(partyName, "bar"));
    }

    chartData["datasets"] = datasets;
    return chartData;
  }

  //name can be 'democratic', 'republican', 'independent', or 'total'
  getVoteDataset(name, chartType) {
    var dataset = new Object();
    dataset["name"] = name;
    dataset["chartType"] = chartType;

    var voteNumbers = new Array();
    var searchName = name.toLowerCase();

    voteNumbers.push(this.voteObject[searchName]["yes"]);
    voteNumbers.push(this.voteObject[searchName]["no"]);
    voteNumbers.push(this.voteObject[searchName]["present"]);
    voteNumbers.push(this.voteObject[searchName]["not_voting"]);

    dataset["values"] = voteNumbers;

    return dataset;
  }
  
}

var arrSenateVoteObjects = new Array();
for (let index of Object.keys(recentVotesSentate) ){
  let vote =  new VoteData(recentVotesSentate[index]);
  arrSenateVoteObjects.push(vote);
  
  console.log(vote.getBarData());
  console.log(vote.getPieData());
  console.log(vote.getVoteDataset("democratic", "bar"));
  console.log(vote.getVoteDataset("republican", "bar"));
  console.log(vote.getVoteDataset("independent", "bar"));
  console.log(vote.getVoteDataset("total", "pie"));
  break;
  
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

export {arrHouseVoteObjects}
export {arrSenateVoteObjects}

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