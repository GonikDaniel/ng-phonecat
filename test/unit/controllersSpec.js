'use strict';

/* jasmine specs for controllers go here */

// Before each test we tell Angular to load the phonecatApp module.
// We ask Angular to inject the $controller service into our test function
// We use $controller to create an instance of the PhoneListCtrl
// With this instance, we verify that the phones array property on the scope contains three records.

describe('PhoneCat controllers', function() {

    beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('phonecatApp'));
    beforeEach(module('phonecatServices'));

    describe('PhoneListCtrl', function() {
        var scope, ctrl, $httpBackend;

        // We used the inject helper method to inject instances of $rootScope, 
        // $controller and $httpBackend services into the Jasmine's beforeEach function. 
        // These instances come from an injector which is recreated from scratch for 
        // every single test. This guarantees that each test starts from a well known 
        // starting point and each test is isolated from the work done in other tests.
        
        // We created a new scope for our controller by calling $rootScope.$new()

        // We called the injected $controller function passing the name of the PhoneListCtrl 
        // controller and the created scope as parameters.

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;

            // Note that the responses are not returned until we call the $httpBackend.flush method.
            $httpBackend.expectGET('phones/phones.json').
                respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', {$scope: scope});
        }));

        it('should create "phones" model with 2 phones fetched from xhr', function() {
            expect(scope.phones).toEqualData([]);
            $httpBackend.flush();

            expect(scope.phones).toEqualData([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });

    });

    describe('PhoneDetailCtrl', function(){
        var scope, $httpBackend, ctrl,
            xyzPhoneData = function() {
                return {
                    name: 'phone xyz',
                    images: ['image/url1.png', 'image/url2.png']
                };
            };

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
        }));

        it('should fetch phone detail', function(done) {
            expect(scope.phone).toEqualData();
            $httpBackend.flush();

            expect(scope.phone).toEqualData(xyzPhoneData());
        });
    });
});