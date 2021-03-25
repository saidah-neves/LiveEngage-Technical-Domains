var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 4000;

let domains = [
    {
      "team": 1,
      "acs-domain": "acs-cognitive",
      "focus": "service issue and data loss related queries"
    },
    {
      "team": 2,
      "acs-domain": "acs-fabric",
      "focus": "service functions"
    },
    {
      "team": 3,
      "acs-domain": "acs-security",
      "focus": "service security"
    }
  ];

  //Example request: http://localhost:4000/domains
  app.get('/domains', function(req, res) {
    res.send(domains);
  });

    //Example request: http://localhost:4000/domains/3 (or any number)
    app.get('/domains/:team', function(req, res) {
      var domainTeam = Number(req.params.team);
      var getDomain = domains.find((domain) => domain.team === domainTeam);
  
      if (!getDomain) {
        res.status(500).send('Domain not found.')
      } else {
      res.send(getDomain);
      }
  });

  var teamMappings = {
    "acsCognitive": "Assistant",
    "acsFabric" : "OpenShift"
  };

 //Example request: http://localhost:4000/teams/keywordHere (any keyworkd in the map)
app.get('/teams/:keyword', function(req, res) {
  var keyword = req.query.keyword;
  var teamName = teamMappings[keyword];
  if (teamName) {
      res.send(teamName);
  } else {
      res.send('there is no team matching that keyword')
  }
});

app.listen(port, () => console.log('Server ready'));
