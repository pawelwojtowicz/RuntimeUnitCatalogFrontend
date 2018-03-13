(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service('naviService', [ '$rootScope',  '$location', function($rootScope, $location) {
        var vm = this;

        vm.navigateTo = function( title, page ){
            $rootScope.$broadcast( 'currentPage' , title );

            $location.url("/"+page);
        };

        


            
    }]);
    }());