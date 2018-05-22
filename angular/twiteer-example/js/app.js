/*global angular*/

// App

angular.module('app', []);

var app = angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('name', {
				url: "/",
				template: "<h3>hello world!</h3>"
			})
		// 	.state('search', {
		// 		url: "/red",
		// 		templateUrl: "views/search.html"
		// 	})
	}
]);