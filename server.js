var express = require('express'),
    drinks  = require('./routes/routes'),
    path = require('path');
 
var app = express();

app.configure(function(){
   app.use(express.static(path.join(__dirname, 'public'))); 
});

app.use(express.bodyParser());

app.get('/episode', drinks.getAllEpisodes);


app.listen(3000);
console.log('Listening on port 3000...');