(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('systemModelDialogController',['selectedSystemModelId','systemModelService','$mdDialog', function(selectedSystemModelId,systemModelService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add System Model";
      vm.systemModelId = selectedSystemModelId;
      vm.name = "";
      vm.description = "";
    
      if ( 0 != vm.systemModelId) {
        vm.dialogTitle = "Edit Edit System Model";
        
        systemModelService.getSystemModelById(vm.systemModelId).then( function( systemModel ) {
          vm.name = systemModel.name;
          vm.description = systemModel.description;
        } , function( error ){
        });
      }
      
      vm.save = function() {
        var systemModel = {
          systemModelId : vm.systemModelId,
          name : vm.name,
          description : vm.description
        };
        
        
        systemModelService.addSystemModel(systemModel).then( function() {
          $mdDialog.hide();
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }]);

}());