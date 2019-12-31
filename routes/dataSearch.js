const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const mongoose = require("mongoose");

mongoose.set('debug', true);

// GET data
router.get("/", (req, res) => {
  Data.find({})
    .then(data => {
      console.log("response", data);
      res.json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
