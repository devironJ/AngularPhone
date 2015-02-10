'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;

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
