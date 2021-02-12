var cron = require('node-cron');
var dataHelper = require('./src/get_data.js');

//valid timezones: https://raw.githubusercontent.com/node-cron/tz-offset/a67968ab5b0efa6dee296dac32d3205b41f158e0/generated/offsets.json
cron.schedule('0 0 0 * * *', function() {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});