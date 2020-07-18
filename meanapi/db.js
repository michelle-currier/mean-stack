var mysql = require('mysql');

const connection = mysql.createConnection({
    // host: "localhost",    
    // port: 3306,
    // user: 'root',   
    // password: "",  
    // database: "meanapp"
   
    host: "testdb.cjtizh8jjvj0.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: 'admin',
    password: "ChangeM3",
    database: "mushel"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports = connection;