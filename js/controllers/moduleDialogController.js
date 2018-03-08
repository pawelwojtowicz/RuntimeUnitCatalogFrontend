(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('moduleDialogController',['selectedModuleId','moduleService','$mdDialog', function(selectedModuleId,moduleService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add Module";
      vm.moduleId = selectedModuleId;
      vm.name = "";
      vm.description = "";
    
      if ( 0 != vm.moduleId) {
        vm.dialogTitle = "Edit Module";
        
        moduleService.getModuleById(vm.moduleId).then( function( moduleInfo ) {
          vm.name = moduleInfo.name;
          vm.description = moduleInfo.description;
        } , function( error ){
        });
      }
      
      vm.save = function() {
        var module = {
          moduleId : vm.moduleId,
          name : vm.name,
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