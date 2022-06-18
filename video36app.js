var bodyParser = require(`body-parser`);
var moongose = require(`moongose`);

//Connect to the database
moongose.connect(`mongodb://tesrt:<dbpassword>@ds017195.mlab.com:17195/todo`);

//Create a schema - this is like a blueprint
var todoSchema = new moongose.Schema({
    item:String
});

var Todo = moongose.model(`Todo`, todoSchema);
var itemOne = Todo({item: `buy flowers`}).save(function(err){
    if (err) throw err;
    console.log(`item saved`);
});

var data = [{item: `get milk`}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){}
    app.get(`/todo`, function(req, res){
        res.render(`todo`, {todos: data});
    });

    app.post(`/todo`, urlencodedParser,  function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete(`todo`, function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, `-`) !== req.params.item;
        });
        res.json(data);
    }); 