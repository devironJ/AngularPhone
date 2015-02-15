'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices',['ngResource']);

//phone is passed through the function as a resource argument
//$resource is used to create a RESTful client as opposed to using an $http service
phonecatServices.factory('Phone',['$resource',function($resource){
        return $resource('phones/:phoneId.json', {},{
            query: {method: 'GET', params:{phoneId:'phones'}, isArray:true}
        });
}]);