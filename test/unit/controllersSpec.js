'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {



  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

      ////older tests for 3 phones with old data as well as check for default filter
      //service $controller retrieves and creates an instance of controller by name
      //beforeEach(inject(function($controller) {
      //    scope = {};
      //    ctrl = $controller('PhoneListCtrl', {$scope:scope});
      //}));
      //
      //it('should create "phones" model with 3 phones', function() {  //injecting the service $controller into test func
      //    expect(scope.phones.length).toBe(3); //verifies that the phones array property on the scope contains three records
      //});
      //
      //
      //it('should set the default value of orderProp model', function() {
      //    expect(scope.orderProp).toBe('age');
      //});

  //inject reference to load Angular module 'phonecatApp' before each test
    beforeEach(module('phonecatApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});
