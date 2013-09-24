'use strict';

/* Directives */


var directives = angular.module('myApp.directives', []);


directives.directive('searchField', function () {
	return {
		restrict : 'A',
		template : '<div contentEditable="true" ng-model="currenttrem"></div><span ng-repeat="term in searchterms">{{term.value}}</span>',
		link : function (scope, element, attrs) {
			scope.searchterms = [];
			scope.currenttrem = "test";
			$(element).keypress(function (e) {
			  if (e.which == 13) {			
			    scope.searchterms.push({"value" : scope.currenttrem});
			    scope.currenttrem = "";
			   // this.textContent = "";
			    scope.$apply();
			    return false;    //<---- Add this line
			  }
			});
		}
	}
});


