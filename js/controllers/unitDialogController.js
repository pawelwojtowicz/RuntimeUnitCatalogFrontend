(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitDialogController',['selectedUnitId','unitService','unitTypeService','moduleService','$mdDialog', function(selectedUnitId,unitService,unitTypeService,moduleService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add Unit";
      vm.unitTypeList = [];
      vm.moduleList = [];
      vm.unitId = selectedUnitId;
      vm.unitTypeId = 0;
      vm.moduleId = 0;
      vm.description = "";
      
      /** fetch the unit types from the server */
      unitTypeService.getAllUnitTypes().then( function (unitTypes) {
        vm.unitTypeList = unitTypes;
      });
      
      /** fetch the modules from the server */
      moduleService.getAllModules().then( function ( modules ) {
        vm.moduleList = modules;
      });
    
      if ( "" != vm.unitId) {
        vm.dialogTitle = "Edit Unit";
        
        unitService.getUnitById(vm.unitId).then( function( unit ) {
          vm.unitId = unit.unitId;
          vm.unitTypeId = unit.unitType.unitTypeId;
          vm.moduleId = unit.module.moduleId;
          vm.description = unit.description;
        } , function( error ){
        });
      }
      
      vm.save = function() {
        var unit = {
          unitId : vm.unitId,
          name : vm.name,
          unitTypeId: vm.unitTypeId,
          moduleId: vm.moduleId,
          description : vm.description
        };
        
        console.log(JSON.stringify(unit));
        
        unitService.addUnit(unit).then( function() {
          $mdDialog.hide();
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }]);

}());