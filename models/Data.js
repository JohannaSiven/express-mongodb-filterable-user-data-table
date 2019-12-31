const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema({
  _id: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String
},
{ collection: 'data' }
);

const Data = mongoose.model("Data", personSchema);
module.exports = Data;
