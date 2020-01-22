var express = require('express');
var router = express.Router();
const key = require('../key');


const MongoClient = require('mongodb').MongoClient;
const uri = key;


/* GET Programming Category Quiz. */
router.get('/category-programming', function (req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      console.log(err)
    }
    const collection = client.db("quizy").collection("Programming");
    collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
    client.close();
  });
});


/* GET home page. */
router.get('/category-math', function (req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      console.log(err)
    }
    const collection = client.db("quizy").collection("Math");
    collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
    client.close();
  });
});

/* GET home page. */
router.get('/category-science', function (req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      console.log(err)
    }
    const collection = client.db("quizy").collection("Science");
    collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
    client.close();
  });
});


/* GET home page. */
router.get('/category-language', function (req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      console.log(err)
    }
    const collection = client.db("quizy").collection("Language");
    collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
    client.close();
  });
});


module.exports = router;


