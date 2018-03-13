(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('moduleDialogController',['selectedModuleId','moduleService','systemModelService','$mdDialog', function(selectedModuleId,moduleService,systemModelService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add Module";
      vm.moduleId = selectedModuleId;
      vm.name = "";
      vm.description = "";
      vm.systemModelId = systemModelService.getSelectedModel().systemModelId;

      console.log("w kontrolerze takie znam id ="+vm.systemModelId); 
    
      if ( 0 != vm.moduleId) {
        vm.dialogTitle = "Edit Module";
        
        moduleService.getModuleById(vm.moduleId).then( function( moduleInfo ) {
          vm.name = moduleInfo.name;
          vm.description = moduleInfo.description;
          vm.systemModelId = moduleInfo.systemModelId;
        } , function( error ){
        });
      }
      
      vm.save = function() {
        var module = {
          moduleId : vm.moduleId,
          name : vm.name,
          systemModelId: vm.systemModelId,
          description : vm.description
        };
        
        console.log(JSON.stringify(module));
        
        moduleService.addModule(module).then( function() {
          $mdDialog.hide();
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }]);

}());