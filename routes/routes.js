
/*
	
*/

exports.getAllEpisodes = function (req, res){
	var episodes = [{title: "test"},{title: "test2"}]; 
	res.send(episodes); 
}

