(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitListController',['unitService' ,'$mdDialog',function( unitService ,$mdDialog)
        {
            var vm = this;   
            vm.unitList = [];

            unitService.getAllUnits().then( function (unitList) {
                vm.unitList = unitList;
            });
                        
            vm.deleteUnit = function( unitId )
            {
                unitService.deleteUnit(unitId).then ( function() {
                    unitService.getAllUnits().then(function( unitList) { 
                        vm.unitList = unitList;
                    });
                });
            };
    
            vm.showAddDialog = function() {
                vm.showUnitDialog("").then( function() {
                    unitService.getAllUnits().then(function( unitList) { 
                        vm.unitList = unitList;
                    });                    
                });
            };
            vm.showUpdateDialog = function( id ) {
                vm.showUnitDialog(id).then( function() {
                    unitService.getAllUnits().then(function( unitList) { 
                        vm.unitList = unitList;
                    });
                });
            };

            vm.showUnitDialog = function ( id) {
                console.log("I am still here");
                return $mdDialog.show({
                    templateUrl: 'partials/unitDialog.html',
                    controller: 'unitDialogController',
                    controllerAs: 'vm',
                    //targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        selectedUnitId: id
                    }
                });
            };
    
        }]);
    }());