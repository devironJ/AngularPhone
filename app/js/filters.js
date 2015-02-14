'use strict';

/* Filters */
angular.module('phonecatFilters', []).filter('checkmark', function(){
    return function(input){
        //\u2713 is a check mark, \u2718 is a X, based on true or false input
        return input ? '\u2713' : '\u2718';
    };
});