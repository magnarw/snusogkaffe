var express = require('express'),
    drinks  = require('./routes/routes'),
    path = require('path');
 
var app = express();

app.configure(function(){
   app.use(express.static(path.join(__dirname, 'public'))); 
});

  app.use(express.bodyParser({uploadDir:'/bilder/'}));
  app.use(express.methodOverride());

app.get('/api/episode', drinks.getAllEpisodes);
app.get('/api/filelist', drinks.getFileList);
app.post('/api/episode', drinks.saveEpisode);
app.get('*', drinks.index);

app.listen(3000);
console.log('Listening on port 3000...');