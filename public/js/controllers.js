'use strict';

/* Controllers */

function AdminEpisodeCtrl($scope, $http) {
  $scope.terms = [{"blb:": "bfdf"}]; 
  $scope.newEpisode = { 'title' : '', 'ingress' : '', 'text' : ''};
  $scope.newEpisodeImage; 
  $scope.image; 
  $scope.episodeFiles = []; 
  $scope.selectedEpisode; 

  $scope.getEpisodeFilesOverView = function () {
    $http({
      url : 'http://localhost:3000/api/filelist',
      method: 'GET',
      headers : 'Content-Type : application/json'
    }).success(function(data){
          $scope.episodeFiles = data; 
    }); 
  }
  $scope.getEpisodeFilesOverView(); 

  $scope.$on("fileSelected", function (event, args) {
       var reader = new FileReader();
        $scope.$apply(function () {            
            //add the file object to the scope's files collection
            $scope.newEpisodeImage = args.file;

         

      // Closure to capture the file information.
          reader.onload = (function(theFile) {
            return function(e) {
              $scope.image = e.target.result;
               $scope.$apply();
            };
          })();
        });
        reader.readAsDataURL( $scope.newEpisodeImage);

  });

  $scope.saveEpisode = function () {
  	$http({
            url: 'http://localhost:3000/api/episode',
            method: "POST",
            transformRequest: function (data) {
                var formData = new FormData();
                //need to convert our json object to a string version of json otherwise
                // the browser will do a 'toString()' on the object which will result 
                // in the value '[Object object]' on the server.
                formData.append("model", angular.toJson(data.model));
                formData.append("file", data.file);
                return formData;
            },
            data: { model: $scope.newEpisode, file: $scope.newEpisodeImage},
            headers: { 'Content-Type': false }
        }).success(function (data, status, headers, config) {
                console.log('Det gikk bra')
            }).error(function (data, status, headers, config) {
               console.log('Det gikk dårlig')
    });
	}
 }

function MyCtrl1($scope, $http) {


}

function MyCtrl2() {
}

