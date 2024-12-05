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

    app.post('/write-account', function(req, res){
       
        var data = {
            email_address: req.body.email_address,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password

        };
        console.log(JSON.stringify(data));
        connection.query("INSERT INTO accounts SET ?", data, function(err){
            if(err){
                return res.status (201).send(JSON.stringify({msg: "Error" + err}));
            } else{
                return res.status (200).send(JSON.stringify({msg: "SUCCESS"}));

            }

        });
    });

    app.get('/get-account', function(req, res) {
        // var data = {
        //     email_address: req.body.email_address,
        //     password: req.body.password
        // }
        // console.log(JSON.stringify(data));
        // const { email_address, password} = req.body;

        // if(email_address === 'email_address' && password === 'password' ){
        //     res.json({success: true});
        // } else{
        //     res.json({success: false, message: 'Incorrect username or password'});
        // }
        connection.query("SELECT email_address, password FROM accounts", function(err, rows) {
            if(err) {
                throw err;
            } else {
              console.log("Look up account");
              // connection.end();
              return res.status(201).send(JSON.stringify({msg:"SUCCESS", accounts:rows}));
            }
        });    
  });

    app.get('/get-product', function(req, res){
        connection.query("SELECT * FROM products", function(err,rows){
            if(err){
                throw err;
            }else{
                console.log("Displayed product")
                return res.status(201).send(JSON.stringify({msg:"SUCCESS", products:rows}));

            }
        })
    });


};


module.exports = services;


//Insert record to account table
// const account = {first_name: 'Stephanie', last_name: 'Gonzalez', email_address:'sgonzalezmoral1@my.brookdalecc.edu', password: 'password'};
// connection.query('INSERT INTO accounts SET ?', account, (err, result) => {
//     if(err) throw err;
//     console.log("Account insert successful!");
// })