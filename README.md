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
Default route:  
`localhost:4000`  

See all items in the list sorted from first item added to last item added:  
`localhost:4000/items`   

Add item into the database with ('Item_Name', 'Priority', 'Store_name') fields:  
`localhost:4000/items/add` 

See items with low priority  
`localhost:4000/items/lowP`  

See items with medium priority  
`localhost:4000/items/mediumP`  

See items with high priority  
`localhost:4000/items/highP`  

***...adding more routes to handle 'items by store' request...***
***...suggest me if I should add more information in this section...***

## *Run Frontend* 

### Interminal run following commands in the /my-list directory
```
npm install
npm start
```
### To test frontend 
The frontend app will launch your browser automatically. If it doesn't, go to `localhost:3000`

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
     
4. Now open the connection called Local instance 3306, click on Schemas on the left side menu, then press `shift + command + o` to open a SQL Script. 
5. Run the script located in the [project root directory](/GrossListDatabase.sql)

Now if you look at the schemas section, you should see GrossListDatabase schema with some values in the relation called GrossList. Now if you go back to backend section, you should be able to use those routes and get the data back from this database.


***...suggest me if I should add more information in this section...***


Ignore this: non-breaking white space`                              `
