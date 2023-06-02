const mysql = require('mysql');
require('dotenv').config();

// create connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
// connect to database
db.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
}
);

module.exports = db;