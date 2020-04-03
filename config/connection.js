var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 8080,
    user: "root",
    password: "Agar112405",
    database: "burger_db"
});

connection.connect(err =>{
    if(err){
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connecting as id" + connection.threadId);
    
});

module.exports = connection;