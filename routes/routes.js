
EpisodeProvider = require('../dao/EpisodeProvider').EpisodeProvider;

/*
	
*/

var episodeProvider= new EpisodeProvider('localhost', 27017);

exports.getAllEpisodes = function (req, res){

	episodeProvider.findAll(function(error, episodes){
	  console.log("kommer hit:" + episodes);
      res.json(episodes);
  });
}

exports.saveEpisode = function (req, res){
	  episodeProvider.save(req.body,function(error, result){
	  console.log("kommer hit:" + result);
      res.json({'message' : 'This went ok'}); 
  });
}


exports.index = function(req, res) {
    res.sendfile(__dirname + "/public/index.html"); // updated to reflect dir structure
};