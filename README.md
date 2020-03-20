# fullStackWebAppFromScratch
This is a full stack node app that implements following technologies.

- **Mysql** for database
- **React.js** for frontend  
- **Node.js** for backend

This app is a list making service that a user can use to add items to their list and then they can view those items in 3 different ways.
1. View **ALL** items sorted alphabetically. 
2. View items based on **LOW**, **MEDIUM** or **HIGH** priority.
3. View items based on which **STORE** they want to buy it from. 

## *Run Backend* 

### In terminal run following commands in the project's root directory
```
npm install
npm start
```

### To test backend, go to following links in your browser or in Postman 
- localhost:4000                                 -> this is defalt route
- localhost:4000/items                     -> this will show all the items in your database.
- localhost:4000/items/add            -> this will add item into the database with ('Item_Name', 'Priority', 'Store_name') fields 
- localhost:4000/items/lowP          -> this will show items with low priority
- localhost:4000/items/mediumP -> this will show items with medium priority
- localhost:4000/items/highP        -> this will show items with high priority

***...adding more routes...***
***...suggest me if I should add more information in this section...***

## *Run Frontend* 

### Interminal run following commands in the /my-list directory
```
npm install
npm start
```
### To test frontend 
The frontend app will launch your browser automatically. If it doesn't, go to localhost:3000

Make any changes you want in files and then when you same them it will automatically restart the server and once you look at webbroser, it will show the changed you made. If it doesn't, reload your web page.

***...suggest me if I should add more information in this section...***

## *Local Database Setup*

### To setup the database on your local machine do the following
1. Install free MySQLWorkbench to access and manage your database from [here](https://dev.mysql.com/downloads/workbench/)
2. Install free MySQL Server from [here](https://dev.mysql.com/downloads/mysql/)
3. Open MySQLWorkbench and check if you already have `localhost:3306` as your MySQL Connections. 
   - If you don't have it do the following
     - Click the + button to add new connection
     - Connection Name:`Local instance 3306`
     - Connection Method:`Standard (TCP/IP)`
     - Hostname:`127.0.0.1`
     - Port:`3306`
     - Username:`root`
     - Password:'rootdatabase123'
     - Default Schema:`GrossListDatabase`
   - If you do have it do the following 
     - Detele that crap and make it again with the instructions provided above.
     
4. ......working on it have some patience.......
