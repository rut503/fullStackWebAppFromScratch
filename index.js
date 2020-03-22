// jshint esversion:6

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_ITEMS_QUERY = 'SELECT * FROM GrossListDatabase.GrossList;';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootdatabase123',
    database: 'GrossListDatabase'
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
    res.send('Go to different API paths to access different stuff!');
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

// localhost:4000/items/add?name=Backpack&priority=MEDIUM&store=Dicks
// for empty store http://localhost:4000/items/add?name=Backpack&priority=MEDIUM&store=
app.get('/items/add', (req, res) => {
    const {name, priority, store} = req.query;
    const INSERT_ITEM_QUERY = `INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) VALUES ('${name}','${priority}','${store}');`;
    connection.query(INSERT_ITEM_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Successfully added an item to the list');
        }
    });
});

// localhost:4000/items/status?id=3&status=TRUE
// status TRUE = done 
// status FALSE = not done
app.get('/items/status', (req, res) => {
    const { id, status } = req.query;
    const UPDATE_DONE_ITEM_QUERY = `UPDATE GrossListDatabase.GrossList SET IStatus = ${status} WHERE ID = ${id};`;
    connection.query(UPDATE_DONE_ITEM_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Successfully updated an item status');
        }
    });
});

// app.get('/items/lowP', (req, res) => {
//     res.send('Sending all of the items based on LOW PRIORITY ... ');
// });

// app.get('/items/mediumP', (req, res) => {
//     res.send('Sending all of the items based on MEDIUM PRIORITY ... ');
// });

// app.get('/items/highP', (req, res) => {
//     res.send('Sending all of the items based on HIGH PRIORITY ... ');
// });

// app.get('/items/store', (req, res) => {
//     res.send('Sending all of the items based on STORE name ... ');
// });

app.listen(4000, () => {
    console.log('This list server is running on port 4000 ... ');
});