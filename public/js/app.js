'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters','episodeService','ngResource', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when("/episodes", {templateUrl: "views/adminepisodes.html", controller: AdminEpisodeCtrl});
    //$locationProvider.html5Mode(true);
  }]);