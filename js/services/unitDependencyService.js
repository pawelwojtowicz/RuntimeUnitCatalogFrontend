(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service('unitDependencyService', [ '$http', 'appConfig', '$q' , function($http,appConfig,$q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unitdependency";   
    
        vm.addDependency = function ( sunitId, srequiredUnitId ) {
            var dependency = {
                unitId : sunitId,
                requiredUnitId : srequiredUnitId
            };

            console.log(JSON.stringify(dependency));

            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                    method: "POST",
                    data: dependency,
                    headers: {'Content-Type': 'application/json'}}).then (
                    function( response) {
                        resolve();
                    } , function () {
                        reject();
                    });
            });
        };
            
        vm.removeDependency = function( sunitId, srequiredUnitId) {
            var dependency = {
                unitId : sunitId,
                requiredUnitId : srequiredUnitId
            };

            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                    method: "DELETE",
                    data: dependency,
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