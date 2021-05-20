var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

  var teamMappings = {
    //For @acs-AICognitive domain
    "Watson Assistant" : "acs-AICognitive",

    //For @acs-Fabric domain
    "OpenShift" : "acs-Fabric",
    "OpenShift cluster" : "acs-Fabric",
    "k8-cluster" : "acs-Fabric",
    "Docker issues" : "acs-Fabric",
    "Kubernetes cluster" : "acs-Fabric",
    "Kubernetes" : "acs-Fabric",
    "Cloud Pak Data" : "acs-Fabric",
    "Deploy Cloud Pak" : "acs-Fabric",
    "SysDig" : "acs-Fabric",

    //For @acs-appdev-team domain
    "enterprise api connection" : "acs-appdev-team",
    "API Connect application" : "acs-appdev-team",
    "IOT" : "acs-appdev-team",
    "Internet Of Things" : "acs-appdev-team",
    "block chain" : "acs-appdev-team",
    "Event Streams cloud" : "acs-appdev-team",
    "install CP4D on my cluster" : "acs-appdev-team",
    "Nodejs hooking to Watson instance" : "acs-appdev-team",

    //For @acs-compute-team domain
    "connecting to internet from VMware VM" : "acs-compute-team ",
    "Unable to access cpanel" : "acs-compute-team ",
    "openstack" : "acs-compute-team ",
    "OS reload" : "acs-compute-team ",
    "Sendgrid" : "acs-compute-team ",
    "Portal issues" : "acs-compute-team ",
    "server restart for VSI" : "acs-compute-team ",
    "server restart for BM Server" : "acs-compute-team ",
    "Bare metals" : "acs-compute-team ",

    //For @acs-database-cloudant domain
    "cloudant data to logstash" : "acs-database-cloudant",
    "cloudamqp rabbitmq instances" : "acs-database-cloudant",

    //For @acs-database-db
    "DB2 Warehouse" : "acs-database-db",

    //For @acs-security-team
    "Vyatta issues" :"cs-security-team",

  };

 //Example request: http://localhost:4000/teams/keywordHere (any keyworkd in the map)
app.get('/teams/:keyword', function(req, res) {
  var keyword = req.params.keyword;
  var teamName = teamMappings[keyword];
  if (teamName) {
      res.send(teamName);
  } else {
      res.send('there is no team matching that keyword. Check for spelling')
  }
});

app.listen(port, () => console.log('Server ready'));
