(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("unitTypeService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unittype";
        vm.moduleUpdateCallbacks = [];
    
        vm.addUnitType = function (unitType ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: unitType,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getUnitTypeById = function( unitTypeId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(unitTypeId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllUnitTypes = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };

        vm.getUnitTypesForModel = function( systemModelId ) {
            var urlForRequest = vm.url + "/formodel/" + String(systemModelId);
            return $q( function(resolve, reject) {
                $http.get(urlForRequest).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteUnitType = function( unitTypeId) {
            var urlForDeleting = vm.url + "/" + String(unitTypeId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());