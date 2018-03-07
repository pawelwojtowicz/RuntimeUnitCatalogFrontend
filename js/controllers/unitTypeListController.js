(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitTypeListController',['unitTypeService' ,'$mdDialog',function( unitTypeService ,$mdDialog)
        {
            var vm = this;   
            vm.unitTypeList = [];

            unitTypeService.getAllUnitTypes().then( function (unitTypes) {
                vm.unitTypeList = configItems;
            });
                        
            vm.deleteUnitType = function( configItemId )
            {
                unitTypeService.deleteConfigItem(configItemId).then ( function() {
                    unitTypeService.getAllUnitTypes().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };
    
            vm.showAddDialog = function() {
                vm.showUnitTypeDialog(0).then( function() {
                    unitTypeService.getAllUnitTypes().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });                    
                });
            };
            vm.showUpdateDialog = function( id ) {
                vm.showUnitTypeDialog(id).then( function() {
                    unitTypeService.getAllConfigItems().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };

            vm.showUnitTypeDialog = function ( id) {
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