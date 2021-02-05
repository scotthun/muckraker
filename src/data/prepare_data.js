var membersSenate = require('./current_members_senate.json');
membersSenate = membersSenate["results"][0]["members"];

var membersHouse = require('./current_members_house.json');
membersHouse = membersHouse["results"][0]["members"];

var recentVotesSentate = require('./recent_votes_senate.json');
recentVotesSentate = recentVotesSentate["results"]["votes"];

var recentVotesHouse = require('./recent_votes_house.json');
recentVotesHouse = recentVotesHouse["results"]["votes"];
console.log( Object.keys(recentVotesHouse[0]["amendment"]).length );

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
  
  getSourceURL() {
    return this.voteObject.vote_uri;
  }

  getSelectBarText() {
    var id ="";
    if(this.voteObject["bill"] !== undefined && Object.keys(this.voteObject["bill"]).length !== 0 ){
      if(this.voteObject["bill"]["bill_id"] !== undefined){
        id = this.voteObject["bill"]["bill_id"] + ", ";
      }
    }
    else if(this.voteObject["nomination"] !== undefined){
      if(this.voteObject["nomination"]["nomination_id"] !== undefined){
        id = this.voteObject["nomination"]["nomination_id"] + ", ";
      }
    }

    id += this.voteObject["date"] + " " + this.voteObject["time"];
    return id;
  }

  getSummaryData() {
    
    let summary = {
      "bill_id": this.voteObject["bill"]["bill_id"],
      "nomination_id":  "nomination" in this.voteObject ? this.voteObject["nomination"]["nomination_id" ]: '',
      "date": this.voteObject["date"],
      "time": this.voteObject["time"],
      "description": this.voteObject["description"],
      "question": this.voteObject["question"],
      "question_text": this.voteObject["question_text"],
      "latest_action": this.voteObject["bill"]["latest_action"],
      "vote_type": this.voteObject["vote_type"],
      "result": this.voteObject["result"],
      "source": this.voteObject["source"]
    };
    return summary;
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
export {recentVotesHouse}
export {recentVotesSentate}

var data = require('./hello.json');
data = data["message"];
export {data}