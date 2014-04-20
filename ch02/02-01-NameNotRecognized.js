var express = require('express');
var app = express();

app.get('/stooges/:name?', function(req, res, next) {
    var name = req.params.name;

    switch ( name ? name.toLowerCase() : '' ) {
        case 'larry':
        case 'curly': 
        case 'moe':
          res.send(name + ' is my favourite stooge.');
          break;
        case '':
          next();
        default:
          res.send(name + ' is not a recognized stooge.');
    }
});

app.get('/stooges/*?', function(req, res){
  res.send('None of the stooges was listed.');
});

app.get('/?', function(req, res){
  res.send('hello world');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);