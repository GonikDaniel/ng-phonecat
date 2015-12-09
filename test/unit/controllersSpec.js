'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

    describe('PhoneListCtrl', function() {

        it('should do something', function() {
            beforeEach(module('phonecatApp'));

            it('should create "phones" model with 4 phones', inject(function($controller) {
               var scope = {},
                   ctrl = $controller('PhoneListCtrl', {$scope:scope}) ;

                expect(scope.phones.length).toBe(3);
            }));
        });
    });
});
