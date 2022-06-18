var fs = require(`fs`);
var todoController = require(`./controllers/todoController`);


var app = express();
//template engine
app.set(`view engine`, `ejs`);


//track all requests
app.use(function(rec, res, next){
    console.log(`You requested ${req.url}`);
    next();
})

//static files
app.use(express.static(`./public`));

//fire controllers
todoController(app);