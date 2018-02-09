(function() {

  var app = angular.module('tutorial', ['ngRoute']);

  app.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/frontend/html/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise('/')
  });

}());