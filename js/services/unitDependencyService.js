(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service('unitDependencyService', [ '$http', 'appConfig', '$q' , function($http,appConfig,$q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unitdependency";   
    
        vm.addDependency = function ( unitId, requiredUnitId ) {
            var urlForRequest = vm.url + "/" + unitId + "/" + requiredUnitId;
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: {},
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function () {
                            reject();
                        });
            });
        };   
            
        vm.deleteDependency = function( unitId, requiredUnitId) {
            return $q(function( resolve, reject ){
            var urlForRequest = vm.url + "/" + unitId + "/" + requiredUnitId;
            $http({	url: urlForRequest,
                        method: "DELETE",
                        data: {},
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };    

    
    }]);
    }());