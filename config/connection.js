var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

    var connection = mysql.createConnection({
        host: "localhost",
        PORT: 3306,
        user: "root",
        password: "Agar112405",
        database: "burger_db"
    });
};

connection.connect(err => {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connecting as id" + connection.threadId);

});


module.exports = connection;