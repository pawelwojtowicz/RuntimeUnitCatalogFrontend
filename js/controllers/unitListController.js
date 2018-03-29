(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitListController',[ 'unitService', 'systemModelService' ,'$mdDialog',function( unitService, systemModelService ,$mdDialog)
        {
            var vm = this;   
            vm.unitList = [];
            vm.systemModelId = systemModelService.getSelectedModel().systemModelId;

            console.log("here I am - in unit controller" + JSON.stringify(vm.unitList));

            unitService.getUnitsForModel(vm.systemModelId).then( function (unitList) {
                vm.unitList = unitList;
            });
                        
            vm.deleteUnit = function( unitId )
            {
                unitService.deleteUnit(unitId).then ( function() {
                    unitService.getUnitsForModel(vm.systemModelId).then(function( unitList) { 
                        vm.unitList = unitList;
                    });
                });
            };
    
            vm.showAddDialog = function() {
                vm.showUnitDialog(0).then( function() {
                    unitService.getUnitsForModel(vm.systemModelId).then(function( unitList) { 
                        vm.unitList = unitList;
                    });                    
                });
            };
            vm.showUpdateDialog = function( id ) {
                vm.showUnitDialog(id).then( function() {
                    unitService.getUnitsForModel(vm.systemModelId).then(function( unitList) { 
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