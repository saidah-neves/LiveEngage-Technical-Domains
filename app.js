var express = require('express');
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

  app.get('/domains', function(req, res) {
    res.send(domains);
  });

app.get('/domains/:team', function(req, res) {
    res.send(req.params);
});

app.listen(port);