'use strict';
/**
 * Created by Devon on 2/12/2015.
 */


var phonecatApp = angular.module("phonecatApp",['ngRoute','phonecatControllers','phonecatFilters','phonecatServices']);

//***Routers can only be injected into config functions ***
//$routeprovider is the argument for angular route
phonecatApp.config(['$routeProvider',function($routeProvider){
    //first time page runs through, hits the otherwise and goes to '/phones'?
    $routeProvider.when("/phones", {
        templateUrl: 'partials/phone-list.html',
        controller: "PhoneListCtrl"
    }).
        when('/phones/:phoneId',{
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);