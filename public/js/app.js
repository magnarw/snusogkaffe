'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters','episodeService','ngResource','ui.bootstrap', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when("/episodes", {templateUrl: "views/adminepisodes.html", controller: AdminEpisodeCtrl});
    $routeProvider.when("/tests", {templateUrl: "views/test2.html", controller: AdminEpisodeCtrl});
    //$locationProvider.html5Mode(true);
  }]);