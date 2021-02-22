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

var teamMappings = [
  {
   acsCognitive: ['Assistant', 'IAM'],
   acsFabric: ['OpenShift', 'SQL'],
}
];

 //Example request: http://localhost:4000/team/keywordhere
app.get('/team/:keyword', function(req, res) {
    var keyword = req.query.keyword;
    var teamName = teamMappings.find((team) => team.keyword === keyword);
    res.send(teamName);
  });

app.listen(port);
