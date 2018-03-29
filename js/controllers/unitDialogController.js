(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitDialogController',['selectedUnitId','unitService','systemModelService','unitTypeService','moduleService','unitDependencyService','$mdDialog', '$mdToast', function(selectedUnitId,unitService,systemModelService,unitTypeService,moduleService,unitDependencyService,$mdDialog, $mdToast){
    
      var vm = this;
      vm.dialogTitle = "Add Unit";
      vm.unitTypeList = [];
      vm.moduleList = [];
      vm.unitStringId = "";
      vm.unitId = selectedUnitId;
      vm.unitTypeId = 0;
      vm.moduleId = 0;
      vm.description = "";
      vm.systemModelId = systemModelService.getSelectedModel().systemModelId;

      vm.requiredUnits = [];
      vm.allUnits = [];

      vm.selectedDependency = -1;
      vm.selectedUnit = -1;

      unitService.getAllUnits().then( function (unitList) {
        vm.allUnits = unitList;
      });
      
      /** fetch the unit types from the server */
      unitTypeService.getAllUnitTypes().then( function (unitTypes) {
        vm.unitTypeList = unitTypes;
      });
      
      /** fetch the modules from the server */
      moduleService.getAllModules().then( function ( modules ) {
        vm.moduleList = modules;
      });

      vm.updateDialog = function( unitInfo ) {
        vm.unitId = unitInfo.unitId;
        vm.unitStringId = unitInfo.unitStringId;
        vm.unitTypeId = unitInfo.unitType.unitTypeId;
        vm.moduleId = unitInfo.module.moduleId;
        vm.description = unitInfo.description;
        vm.requiredUnits = unitInfo.unitDependencies;
        vm.systemModelId = unitInfo.systemModelId;
      };
    
      if ( 0 != vm.unitId) {
        vm.dialogTitle = "Edit Unit";
        
        unitService.getUnitById(vm.unitId).then( vm.updateDialog , function( error ){
        });
      }
      
      vm.save = function() {
        var unit = {
          unitId : vm.unitId,
          unitStringId : vm.unitStringId,
          name : vm.name,
          unitTypeId: vm.unitTypeId,
          moduleId: vm.moduleId,
          description : vm.description,
          systemModelId : vm.systemModelId
        };
        
        console.log(JSON.stringify(unit));
        
        unitService.addUnit(unit).then( function( result ) {
          console.log( JSON.stringify(result));
          if ( 0 === result.status ) {
            $mdDialog.hide();
          } else {
          
            var position = { bottom: false, top: true, left: false, right: false };
            $mdToast.show( $mdToast.simple().textContent(result.message).hideDelay(3000)
    );
          }
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };

      vm.selectDependency = function( index ) {
        console.log("SelectDependency-"+JSON.stringify(index));
        vm.selectedDependency = index;
        vm.selectedUnit = -1;
      };

      vm.selectUnit = function( index ) {
        console.log("RemoveDependency-"+JSON.stringify(index));
        vm.selectedDependency = -1;
        vm.selectedUnit = index;
      };

      vm.addDependency = function() {
        if ( -1 !== vm.selectedUnit ) {
          if ( vm.unitId !== vm.allUnits[vm.selectedUnit].unitId) {
            unitDependencyService.addDependency( vm.unitId , vm.allUnits[vm.selectedUnit].unitId).then(function() {
              unitService.getUnitById(vm.unitId).then( vm.updateDialog , function( error ){
              console.log(JSON.stringify(error));
              });
              vm.selectedUnit = -1;
            });
          }
        }
      };

      vm.removeDependency = function() {
        if ( -1 !== vm.selectedDependency ) {
          unitDependencyService.removeDependency( vm.unitId , vm.allUnits[vm.selectedDependency].unitId).then(function() {
            unitService.getUnitById(vm.unitId).then( vm.updateDialog , function( error ){
            });

            vm.selectedDependency = -1;
          });
        }
      };

    }]);

}());