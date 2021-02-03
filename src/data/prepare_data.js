var membersSenate = require('./current_members_senate.json');
membersSenate = membersSenate["results"][0]["members"];

var membersHouse = require('./current_members_house.json');
membersHouse = membersHouse["results"][0]["members"];

var recentVotesSentate = require('./recent_votes_senate.json');
recentVotesSentate = recentVotesSentate["results"]["votes"];

var recentVotesHouse = require('./recent_votes_house.json');
recentVotesHouse = recentVotesHouse["results"]["votes"];

class VoteData {
  constructor(voteObject) {
      this.voteObject = voteObject;
  }

  getPartyKeys() {
    return ["independent", "republican", "democratic"];
  }

  getFriendlyPartyKeys(){
    var keys = this.getPartyKeys();
    for(var i = 0; i <keys.length; i++){
      keys[i] = keys[i].toUpperCase();
    }
    return keys;
  }

  getVoteTypeKeys() {
    return Object.keys(this.voteObject["total"]);
  }

  hasKeyAlready(obj, key) {
    return obj[key] === undefined ? false : true;
  }

  transformToAbbreviatedKey(key){
    var wordsSeparetedByUnderscore = key.split("_");
    var wordsSeparetedBySpace = key.split(" ");
    var newKey = "";

    if(wordsSeparetedByUnderscore.length === 2 ){
      newKey += (wordsSeparetedByUnderscore[0][0] + wordsSeparetedByUnderscore[1][0]);
    }

    else if(wordsSeparetedBySpace.length === 2 ){
      newKey += (wordsSeparetedBySpace[0][0] + wordsSeparetedBySpace[1][0]);
    }

    else {
      newKey += key[0][0];
    }
    return newKey.toUpperCase();
  }

  getBarData() {
    var chartData = new Array();
    var existingVoteKeys = new Object();

    for(let key of this.getVoteTypeKeys()){
      var dataElement = new Object();
      var voteKeyForNewElement = this.transformToAbbreviatedKey(key);
      var hasKey = voteKeyForNewElement in existingVoteKeys;
      if(hasKey){
        voteKeyForNewElement+= key[1].toUpperCase();
      }
      dataElement["vote"] = voteKeyForNewElement;
      existingVoteKeys[voteKeyForNewElement] = 1;
      for(let party of this.getPartyKeys()){
        var numVotes = this.voteObject[party][key];  
        
        dataElement[party.toUpperCase()] = numVotes === undefined ? 0 : numVotes;
      }
      chartData.push(dataElement);
    }
    return chartData;
  }

  getPieData() {
    var chartData = new Array();
    var existingVoteKeys = new Object();

    for(let key of  this.getVoteTypeKeys()){
      var dataElement = new Object();
      var newKey = this.transformToAbbreviatedKey(key);
      var hasKey = newKey in existingVoteKeys;
      if(hasKey){
        newKey += key[1].toUpperCase();
      }
      dataElement["id"] = newKey;
      dataElement["label"] =  dataElement["id"];
      existingVoteKeys[newKey] = 1;
      
      var totalVotes = this.voteObject["total"];
      
      dataElement["value"] = totalVotes[key]

      chartData.push(dataElement);
    }
    return chartData;
  }

  getLegendHints() {
    var keys = this.getVoteTypeKeys();

    var mapLegendHints = new Object();

    for(var i = 0; i < keys.length ; i++ ){
      var newKey = this.transformToAbbreviatedKey(keys[i]);
      var hasKey = newKey in mapLegendHints;
      if(hasKey){
        newKey += keys[i][1].toUpperCase();
      }
      mapLegendHints[newKey] = keys[i];
    }

    return mapLegendHints;
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


let vote =  new VoteData(recentVotesHouse[15]);
console.log(vote.getLegendHints());

var arrSenateVoteObjects = new Array();
for (let index of Object.keys(recentVotesSentate) ){
  let vote =  new VoteData(recentVotesSentate[index]);
  arrSenateVoteObjects.push(vote);
}

var arrHouseVoteObjects = new Array();
for (let index of Object.keys(recentVotesHouse) ){
  let vote =  new VoteData(recentVotesHouse[index]);
  arrHouseVoteObjects.push(vote);
}

var arrMembersSenate = new Array();
for(let index of membersSenate) {
  let member = new MemberData(index);
  arrMembersSenate.push(member.getMemberData());
}

var arrMembersHouse = new Array();
for(let index of membersHouse) {
  let member = new MemberData(index);
  arrMembersHouse.push(member.getMemberData());
}

export {arrHouseVoteObjects}
export {arrSenateVoteObjects}
export {arrMembersHouse}
export {arrMembersSenate}

var data = require('./hello.json');
data = data["message"];
export {data}