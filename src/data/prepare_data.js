var memebrsSenate = require('./current_members_senate.json');
memebrsSenate = memebrsSenate["results"][0]["members"];
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

var data = require('./hello.json');
data = data["message"];

export {data}