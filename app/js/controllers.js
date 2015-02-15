'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl',['$scope', 'Phone', function($scope, Phone){
    //we've passed the service as an argument (which has already been called in app.js), and then calling the query
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}]);
//query done with $http call
//phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
//
//    //returns a promise object with a success
//    $http.get('phones/phones.json').success(function(data) {
//    $scope.phones = data;
//
//    ////limits to 5 pieces of data
//    //$scope.phones = data.splice(0, 5);
//
//      ////previous example phones
//      //$scope.phones = [
//      //    {'name': 'Nexus S',
//      //        'snippet': 'Fast just got faster with Nexus S.',
//      //        'age': 1},
//      //    {'name': 'Motorola XOOM™ with Wi-Fi',
//      //        'snippet': 'The Next, Next Generation tablet.',
//      //        'age': 2},
//      //    {'name': 'MOTOROLA XOOM™',
//      //        'snippet': 'The Next, Next Generation tablet.',
//      //        'age': 3}
//      //];
//  });
//
//  $scope.orderProp = 'age';
//}]);


phonecatControllers.controller('PhoneDetailCtrl',['$scope', '$routeParams','Phone',function($scope, $routeParams, Phone){
    //figure out why it is $scope.phone? guessing that you are accessing Phone from services.js
    //searching the json by phoneId, then putting it in the function to pull the image
    $scope.phone=Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
}]);

//PhoneDetailCtrl with $http request
//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams,$http) {
//    //phoneId is what the JSON's name is, therefore references the JSON
//    //$routeParams is the variable used with angular-route
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
//        $scope.phone = data;
//        $scope.mainImageUrl = data.images[0];
//    });
//    $scope.setImage = function(imageUrl){
//        $scope.mainImageUrl = imageUrl;
//    }
//}]);
