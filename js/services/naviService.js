(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service('naviService', [  '$location', function($location) {
        var vm = this;

        vm.navigateTo = function( page ){
            $location.url("/"+page);
        };
            
    }]);
    }());