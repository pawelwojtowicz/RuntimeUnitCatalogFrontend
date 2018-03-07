(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("systemModelService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/systemmodel";
    
        vm.addSystemModel = function ( systemModel ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: systemModel,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getSystemModelById = function( systemModelId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(systemModelId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllSystemModels = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteSystemModel = function( systemModelId ) {
            var urlForDeleting = vm.url + "/" + String(systemModelId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());