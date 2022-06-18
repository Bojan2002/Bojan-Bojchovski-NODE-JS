var express = require(`express`);
var app = express();

app.get(`/`, function(req, res){
    res.send(`this is the homepage`);
});

app.get(`/contact`, function(req, res){
    res.send(`this is the contact page`);
});

app.get(`/profile/:id`, function(req, res){
    res.send(`Yourequested to see a profile with the name of ` + req.params.name);
});
app.listen(3000);