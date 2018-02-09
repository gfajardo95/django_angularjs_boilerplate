(function(){

  var app = angular.module('tutorial');

  app.controller('HomeCtrl', ['$scope', '$location', function($scope, $location){

    $scope.seeTasks = function(){
      $location.path('/tasks');
    }

  }]);

}());