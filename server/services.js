const mysql = require('mysql2');
//Create a connection to the database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Mangopet190!',
    database: 'mydb'
});

//Connect to the database 

connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to MySQL!");
})

var services = function(app){
    app.post('/write-record', function(req, res){
       
        var data = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            quantity: req.body.quantity

        };
        console.log(JSON.stringify(data));
        connection.query("INSERT INTO products SET ?", data, function(err){
            if(err){
                return res.status (201).send(JSON.stringify({msg: "Error" + err}));
            } else{
                return res.status (200).send(JSON.stringify({msg: "SUCCESS"}));

            }

        });
    });
};

module.exports = services;


//Insert record to account table
// const account = {first_name: 'Stephanie', last_name: 'Gonzalez', email_address:'sgonzalezmoral1@my.brookdalecc.edu', password: 'password'};
// connection.query('INSERT INTO accounts SET ?', account, (err, result) => {
//     if(err) throw err;
//     console.log("Account insert successful!");
// })