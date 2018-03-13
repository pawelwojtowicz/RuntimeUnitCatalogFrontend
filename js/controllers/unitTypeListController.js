(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitTypeListController',['unitTypeService','systemModelService' ,'$mdDialog',function( unitTypeService,systemModelService ,$mdDialog)
        {
            var vm = this;   
            vm.unitTypeList = [];
            vm.systemModelId = systemModelService.getSelectedModel().systemModelId;

            unitTypeService.getUnitTypesForModel(vm.systemModelId).then( function (unitTypes) {
                vm.unitTypeList = unitTypes;
            });
                        
            vm.deleteUnitType = function( unitTypeId )
            {
                unitTypeService.deleteUnitType(unitTypeId).then ( function() {
                    unitTypeService.getUnitTypesForModel(vm.systemModelId).then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };
    
            vm.showAddDialog = function() {
                vm.showUnitTypeDialog(0).then( function() {
                    unitTypeService.getUnitTypesForModel(vm.systemModelId).then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });                    
                });
            };
            vm.showUpdateDialog = function( id ) {
                vm.showUnitTypeDialog(id).then( function() {
                    unitTypeService.getUnitTypesForModel(vm.systemModelId).then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };

            vm.showUnitTypeDialog = function ( id) {
                console.log("I am still here");
                return $mdDialog.show({
                    templateUrl: 'partials/unitTypeDialog.html',
                    controller: 'unitTypeDialogController',
                    controllerAs: 'vm',
                    //targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        selectedUnitTypeId: id
                    }
                });
            };
    
        }]);
    }());