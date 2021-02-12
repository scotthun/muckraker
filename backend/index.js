var cron = require('node-cron');
var dataHelper = require('./src/get_data.js');

//valid timezones: https://raw.githubusercontent.com/node-cron/tz-offset/a67968ab5b0efa6dee296dac32d3205b41f158e0/generated/offsets.json
cron.schedule('0 8 0 * * *', function() {
  dataHelper.getData();
}, {
    scheduled: true,
    timezone: "America/Los_Angeles"
}
);

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the backend of Watching the Watchmen')
});

app.get('/getSenators', (req, res) => {
  let senators = require('./src/data/current_members_senate.json');
  res.json(senators)
});

app.get('/getRepresentatives', (req, res) => {
  let representatives = require('./src/data/current_members_house.json');
  res.json(representatives)
});

app.get('/getMemberRecentVotes', (req, res) => {

  let id = req.query.id;
  let representatives = require('./src/data/member_data/' + id + ".json");
  res.json(representatives)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});