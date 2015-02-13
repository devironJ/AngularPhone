/**
 * Created by Devon on 2/12/2015.
 */


var phonecatApp = angular.module("phonecatApp",['ngRoute','phonecatControllers']);

//***Routers can only be injected into config functions ***
//$routeprovider is the argument for angular route
phonecatApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/phones", {
            templateUrl: 'partials/phone-list.html',
            controller: "PhoneListCtrl"
        }).
        when('/pones/:phoneId',{
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);