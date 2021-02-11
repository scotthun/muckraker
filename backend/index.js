
const {spawn} = require('child_process');

var cron = require('node-cron');
 
var tools = require('./src/get_data.js');
cron.schedule("*/10 * * * * *", function() {
  
  console.log("running a task every 10 second");
});

//tools.getData();

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})