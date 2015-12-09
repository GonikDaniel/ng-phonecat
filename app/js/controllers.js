'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope){
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'Motorola XOOM™',
            'snippet': 'The next, next generation tablet.'
        },
        {
            'name': 'Motorola XOOM™',
            'snippet': 'The next, next generation tablet.'
        }
    ];
});