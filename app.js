const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'views')));
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});





app.listen(3000);