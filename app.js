var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.get('/', function(req, res) {
    res.send(['acs-cognitive-team', 'acs-fabric-team', 'acs-appdev-team', 'acs-database-team', 'acs-database-db2', 'acs-compute-team', 'acs-security-team', 'acs-network-team', 'acs-storage-team', 'acs-virt-team', 'acsvpc', 'goat-team']);
});

app.listen(port, () => console.log(['acs-cognitive-team,acs-fabric-team,acs-appdev-team, acs-database-team, acs-database-db2, acs-compute-team, acs-security-team,acs-network-team, acs-storage-team, acs-virt-team, acsvpc, goat-team']));