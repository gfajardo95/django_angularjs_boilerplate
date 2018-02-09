(function() {

  var app = angular.module('tutorial', ['ngRoute']);

  app.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/frontend/html/home.html',
        controller: 'HomeCtrl'
      })
      .when('/tasks', {
        templateUrl: '/frontend/html/tasks.html',
        controller: 'TaskCtrl'
      })
      .otherwise('/')
  });

}());