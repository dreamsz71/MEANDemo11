const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors');


const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://deepak71:jskdpk7171D@cluster0-84ffr.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "landmark";

var database;


const api = require("./server/routes/api");
const port =3000;

const app = express();
app.options('*', cors()); // include before other routes
app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api",api);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
  });

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"dist/index.html"));
});


app.listen(port,function(){
console.log("Server running on localhost : "+port);

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("employee");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

});