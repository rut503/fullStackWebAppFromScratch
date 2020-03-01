// jshint esversion:6

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_ITEMS_QUERY = 'SELECT * FROM Item;';

const connection = mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'rootdatabase123',
   database: 'listdatabase'
});

connection.connect(err => {
   if (err) {
      console.log(err);
   } else {
      console.log('C onnected to the MySQL server');
   }
});

app.use(cors());

app.get('/', (req, res) => {
   res.send('Go to different API paths to access different shit!');
});

app.get('/items', (req, res) => {
   connection.query(SELECT_ALL_ITEMS_QUERY, (err, results) => {
      if(err){
         return res.send(err);
      }
      else{
         return res.json({
            data: results
         });
      }
   });
});

//localhost:4000/items/add?name=Milk&priority=high&store=JewelOsco
// for empty date and store http://localhost:4000/items/add?name=Milk&date=&priority=high&store=
// date = YYYY-MM-DD
app.get('/items/add', (req, res) => {
   const {name, date, priority, store} = req.query;
   const INSERT_ITEM_QUERY = `INSERT INTO Item(IName, IDate, IPriority, IStore) VALUES ('${name}','${date}','${priority}','${store}')`;
   connection.query(INSERT_ITEM_QUERY, (err, results) => {
      if(err){
         return res.send(err);
      }
      else{
         return res.send('Successfully added an item to the list');
      }
   });
});

app.get('/items/date', (req, res) => {
   res.send('Sending all of the items for specified DATE ... ');
});

app.get('/items/priority', (req, res) => {
   res.send('Sending all of the items based on LOW, MEDIUM or HIGH PRIORITY ... ');
});

app.get('/items/store', (req, res) => {
   res.send('Sending all of the items based on STORE name ... ');
});

app.listen(4000, () => {
   console.log('This list server is running on port 4000 ... ');
});

//insert into Item(IName, IDate, IPriority, IStrore) values("Lemone cake", curdate(), "high", "ALDI");
