'use strict';

/* Directives */


var directives = module('myApp.directives', []);


directives.directive('inlineEdit', function() {
	return{
		restrict: 'A',
		transclude: true,
		template: '<label class="editing" data-ng-transclude></label>',
		controller: ['$scope','$element','$transclude',function($scope, $element, $transclude) {
			$transclude(function(clone) {
				$scope.transcluded_content = clone[0].textContent;
			});
			$element.bind('click', function(){
				$element.hide().after('<input type="text" value="'+$scope.transcluded_content+'" />');
                
				$element.next().focus().blur(function (){
					$scope.transcluded_content = $element.next().val();
					$element.html($scope.transcluded_content);
					$element.next().hide();
					$element.show();
				});
			});
			
		}]
	};
});