var express = require(`express`);
var app = express();

app.set(`view engine`, `ejs`);

app.get(`/`, function(req, res){
    res.send(__dirname + `/index17video.html`);
});

app.get(`/contact`, function(req, res){
    res.send(__dirname + `/contact.html`);
});

app.get(`/profile/:id`, function(req, res){
    var data = {age: 29, job: `ninjas`};
    res.render(`profile`, {person: req.params.name, data: data});
});
app.listen(3000);