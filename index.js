const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');
const access_token = process.env.API_KEY;

app.use(bodyParser.json({ strict: false }));

// Create Pair endpoint
app.post('/Pair', function (req, res) {
  const dataStr = req.body;
  var apiKey = req.get("API_KEY");
 
	if (apiKey == null) {
		res.status(401).json({ error: '"API_KEY" is missing.' });
	}
	else if (apiKey == access_token) {
    var dataArr = JSON.parse(dataStr);
    var answer = pair(dataArr); 
    res.send(''+answer);
  }
  else {
    res.status(401).json({ error: "Invalid API_KEY." });
  }
})

/*
 * Pairs will take one input that is an array of numbers
 * It will return the number of matching pairs for the array
 * Example Input:	 [10, 20, 20, 10, 10, 30, 50, 10, 20]
 * Example output:	 3
 */
function pair(data) {
  var map = new Map([]);

  for (i = 0; i < data.length; i++) {
      var value = data[i];
      if (map.has(value)) {
          map.set(value, map.get(value) + 1);        
      }
      else {
          map.set(value, 1);
      }
  }

  var get_values = map.values();
  var answer = 0;

  for(var ele of get_values) {
      answer = Math.floor(ele / 2) + answer;
  }

  return answer;
}

module.exports.handler = serverless(app);
module.exports.pair = pair;