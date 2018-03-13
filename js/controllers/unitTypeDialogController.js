(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitTypeDialogController',['selectedUnitTypeId','unitTypeService','systemModelService','$mdDialog', function(selectedUnitTypeId,unitTypeService,systemModelService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add Runtime Unit Type";
      vm.unitTypeId = selectedUnitTypeId;
      vm.name = "";
      vm.description = "";
      vm.systemModelId = systemModelService.getSelectedModel().systemModelId;
    
      if ( 0 != vm.unitTypeId) {
        vm.dialogTitle = "Edit Runtime Unit Type";
        
        unitTypeService.getUnitTypeById(vm.unitTypeId).then( function( receivedUnitTypeInfo ) {
          vm.name = receivedUnitTypeInfo.name;
          vm.description = receivedUnitTypeInfo.description;
          vm.systemModelId = receivedUnitTypeInfo.systemModelId;
        } , function( error ){
        });
      }
      
      vm.saveUnitType = function() {
        var unitType = {
          unitTypeId : vm.unitTypeId,
          name : vm.name,
          systemModelId: vm.systemModelId,
          description : vm.description
        };
        
        unitTypeService.addUnitType(unitType).then( function() {
          $mdDialog.hide();
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }]);

}());