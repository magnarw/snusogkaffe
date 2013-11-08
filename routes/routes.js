
EpisodeProvider = require('../dao/EpisodeProvider').EpisodeProvider;
var fs = require('fs');
var path = require('path');
/*
	
*/

var episodeProvider= new EpisodeProvider('localhost', 27017);

exports.getAllEpisodes = function (req, res){

	episodeProvider.findAll(function(error, episodes){
      res.json(episodes);
  });
}

exports.getFileList = function (req, res){
  fs.readdir('/episodes', function (err, files) {
    var fileList = []; 
    if(err){ 
      console.log("Kunne ikke hente liste over episoder:" + err);
      res.json(fileList);
    }
    else { 
    for(var i = 0; i<files.length; i++){
      console.log(files[i]);
      fileList.push({'file' : files[i]})
    }
    res.json(fileList);}
  })
}



exports.saveEpisode = function (req, res){
	  var tempPath = req.files.file.path;
	  targetPath = path.resolve('/Users/Magnar/Desktop/kode/snusogkaffe/public/img/' +req.files.file.name);
	  if (path.extname(req.files.file.name).toLowerCase() === '.jpg') {
        fs.rename(tempPath, targetPath, function(err) {
            console.log(err)
            if (err) throw err;
            console.log("Upload completed!");
       		});
    	}
    var json = JSON.parse( req.body.model)

    var episode = { 'img' : 'img/' + req.files.file.name, 'text' : json.text, 'ingress' :  json.ingress, 'title' : json.ingress}; 
    console.log('Dette er episode:'  + episode);
	  episodeProvider.save(episode ,function(error, result){
      res.json({'message' : 'This went ok'}); 
  });
}


exports.index = function(req, res) {
    res.sendfile(__dirname + "/public/index.html"); // updated to reflect dir structure
};