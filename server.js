var express = require('express'),
    drinks  = require('./routes/routes'),
    path = require('path');
 
var app = express();

app.configure(function(){
   app.use(express.static(path.join(__dirname, 'public'))); 
});

  app.use(express.bodyParser());
  app.use(express.methodOverride());

app.get('/api/episodes', drinks.getAllEpisodes);
app.post('/api/episodes', drinks.saveEpisode);
app.get('*', drinks.index);

app.listen(3000);
console.log('Listening on port 3000...');