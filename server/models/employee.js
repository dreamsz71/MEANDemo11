const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name : String,
    phone : Number,
    email : String,
    password : String 
});

module.exports = mongoose.model("employee",employeeSchema,'employee');