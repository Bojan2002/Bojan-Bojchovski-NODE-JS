var express = require(`express`);
var app = express();

app.set(`view engine`, `ejs`);

app.get(`/`, function(req, res){
    res.render(`index27video.ejs`);
});

app.get(`/contact`, function(req, res){
    res.render(`contact27video.ejs`);
});

app.get(`/profile/:id`, function(req, res){
    var data = {age: 29, job: `ninjas`, hobbies: `eating`};
    res.render(`profile`, {person: req.params.name, data: data});
});
app.listen(3000);