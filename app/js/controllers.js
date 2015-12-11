'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', 
    function($scope, Phone){
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
]);

// Note the use of the :phoneId parameter in the second route declaration. 
// The $route service uses the route declaration — '/phones/:phoneId' — as a 
// template that is matched against the current URL. All variables defined 
// with the : notation are extracted into the $routeParams object.
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
           $scope.mainImageUrl = phone.images[0]; 
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.phoneId = $routeParams.phoneId;
    }
]);