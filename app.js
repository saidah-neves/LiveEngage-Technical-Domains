var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

  var teamMappings = {
    "acsCognitive": "Assistant",
    "acsFabric" : "OpenShift"
  };

 //Example request: http://localhost:4000/teams/keywordHere (any keyworkd in the map)
app.get('/teams/:keyword', function(req, res) {
  var keyword = req.params.keyword;
  var teamName = teamMappings[keyword];
  if (teamName) {
      res.send(teamName);
  } else {
      res.send('there is no team matching that keyword')
  }
});

app.listen(port, () => console.log('Server ready'));
