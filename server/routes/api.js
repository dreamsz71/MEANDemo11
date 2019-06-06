const express = require("express");
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://deepak71:jskdpk7171D@cluster0-84ffr.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "landmark";

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("employee");
    console.log("Connected to the `" + DATABASE_NAME + "`!");
});

const Employee = require("../models/employee");

router.get("/",function(req,res){
    res.send("from api works!!");
});

router.get("/deepak",function(req,res){
    res.send("deepak from api works!!");
});

router.get("/employee",function(req,res){
  //res.send("api works!!");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  //console.log("get request for all employees");
  collection.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});


router.get("/employee/:id",function(req,res){
  //res.send("api works!!");
  //console.log("get request for particular employee");
  collection.findOne({ "_id": new ObjectId(req.params.id) },(error,result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

router.post("/addemployee", (req, res) => {
    //res.send("api works!!");
    res.setHeader('Access-Control-Allow-Origin', '*');
    newEmployee = new Employee();
    newEmployee.name = req.body.name;
    newEmployee.phone = req.body.phone;
    newEmployee.email = req.body.email;
    newEmployee.password = req.body.password;
        
    //newEmployee = new Employee();
    newEmployee.updated = new Date().getTime(); 
    console.log("post employee data");
    console.log(req.body);
    console.log(newEmployee);
    collection.insert(newEmplyee, (error, result) => {
      if(error) {
        return res.status(500).send(error);
       }
      res.send(result.result);
  });
});



module.exports = router;