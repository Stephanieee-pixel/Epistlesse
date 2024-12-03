const path = require("path");

var router = function(app) {
    app.get('/', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/login.html"));
    });

    app.get('/write-library', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/write-library.html"));
    });

    app.get('/register', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/register.html"));
    });

    app.get('/homepage', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/homepage.html"))
    });

    app.get('/product-desc', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/product-desc.html"))
    });

    app.get('/cart', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/cart.html"))
    });
};

module.exports = router;