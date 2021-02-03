var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.get('/', function(req, res) {
    //res.send('<html><head></head><body><h1>Teams:</h1></body></html>');
    res.send(['acs-cognitive-team', 'acs-fabric-team', 'acs-appdev-team', 'acs-database-team', 'acs-database-db2', 'acs-compute-team', 'acs-security-team', 'acs-network-team', 'acs-storage-team', 'acs-virt-team', 'acsvpc', 'acs-paascore']);
});

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

  app.get('/domains', function(req, res) {
    res.send(domains);
  });

app.get('/domains/:team', function(req, res) {
    res.send(req.params);
});

app.listen(port, () => console.log(['acs-cognitive-team,acs-fabric-team,acs-appdev-team, acs-database-team, acs-database-db2, acs-compute-team, acs-security-team,acs-network-team, acs-storage-team, acs-virt-team, acsvpc, acs-paascore']));