'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {

    //returns a promise object with a success
    $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;

    ////limits to 5 pieces of data
    //$scope.phones = data.splice(0, 5);

      ////previous example phones
      //$scope.phones = [
      //    {'name': 'Nexus S',
      //        'snippet': 'Fast just got faster with Nexus S.',
      //        'age': 1},
      //    {'name': 'Motorola XOOM™ with Wi-Fi',
      //        'snippet': 'The Next, Next Generation tablet.',
      //        'age': 2},
      //    {'name': 'MOTOROLA XOOM™',
      //        'snippet': 'The Next, Next Generation tablet.',
      //        'age': 3}
      //];
  });

  $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}]);
