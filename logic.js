const Express = require("express");
const res = require("express/lib/response");
const path= require( "path");
const { allowedNodeEnvironmentFlags } = require("process");

const app = Express()
const port = 3000;

var Markus = 1;
var Martin = 0;
// GET, PUT, POST, DELETE


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  
  app.get('/score',function(req,res){
      res.send({"M":Markus,"MM":Martin});
        })
app.post("/addMarkus", function(req,res){
    Markus++;
    res.sendStatus(200);
})
app.listen(port, () => console.log("listening on port" + port))