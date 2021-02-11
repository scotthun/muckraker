const axios = require('axios');

module.exports = {
  getData(){

    var keyFile = require('./key.json');
    var KEY = keyFile['key'];
  
    var apiURLs = {
      "recent_votes_house" : "https://api.propublica.org/congress/v1/house/votes/recent.json",   
      "recent_votes_senate" : "https://api.propublica.org/congress/v1/senate/votes/recent.json", 
      "current_members_house": "https://api.propublica.org/congress/v1/117/house/members.json",
      "current_members_senate": "https://api.propublica.org/congress/v1/117/senate/members.json"
    }
  
    for(let keyName of Object.keys(apiURLs)){
      


      axios.request({
        url: apiURLs[keyName],
        headers: { 'X-API-Key': KEY },
        method: 'get'
        }).then(response => {
            // console.log(response.data.url);
            console.log(response.data.toJSON())
        }).catch(error => {
            console.log(error);
        });

    }
  
  }
};






