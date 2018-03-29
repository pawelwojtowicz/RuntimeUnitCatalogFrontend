(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("unitService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unit";
    
        vm.addUnit = function ( unit ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: unit,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            console.log(JSON.stringify(response));
                            resolve( response.data );
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getUnitById = function( unitId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(unitId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllUnits = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };

        vm.getUnitsForModel = function( systemModelId ) {
            var urlForRequest = vm.url + "/formodel/" + String(systemModelId);
            return $q( function(resolve, reject) {
                $http.get(urlForRequest).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteUnit = function( unitId ) {
            var urlForDeleting = vm.url + "/" + String(unitId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());