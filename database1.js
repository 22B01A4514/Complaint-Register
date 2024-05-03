const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost', // Change to your MySQL host
    user: 'Haritha Chandana', // Change to your MySQL username
    password: '12345', // Change to your MySQL password
    database: 'complaints', // Change to your database name
});

app.get('/', (req, res) => {
    const query = 'SELECT * FROM myTable'; // Replace with your table name
    // connection.query(query, (err, result) => {
    //     if (err) throw err;
    //     res.render('home', { result }); // Render the data in home.ejs
    // });
});

app.listen(3020, () => {
    console.log('Server started on port 3020');
});
