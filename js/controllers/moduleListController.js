(function () {
'use strict';

var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');

runtimeUnitCatalogApp.controller('moduleListController',['moduleService','systemModelService' ,'$mdDialog',function( moduleService,systemModelService ,$mdDialog) {
  var vm = this;   
  vm.moduleList = [];
  vm.systemModelId = systemModelService.getSelectedModel().systemModelId;
  moduleService.getModulesForModel(vm.systemModelId).then( function ( modules ) {
      vm.moduleList = modules;
  });
              
  vm.delete = function( moduleId )
  {
      moduleService.deleteModule(moduleId).then ( function() {
          moduleService.getModulesForModel(vm.systemModelId).then(function( modules ) { 
              vm.moduleList = modules;
          });
      });
  };

  vm.showAddDialog = function() {
      vm.showModuleDialog(0).then( function() {
          moduleService.getModulesForModel(vm.systemModelId).then(function( modules ) { 
              vm.moduleList = modules;
          });                    
      });
  };
  vm.showUpdateDialog = function( id ) {
      vm.showModuleDialog(id).then( function() {
          moduleService.getModulesForModel(vm.systemModelId).then(function( modules ) { 
              vm.moduleList = modules;
          });
      });
  };

  vm.showModuleDialog = function ( id) {
      return $mdDialog.show({
          templateUrl: 'partials/moduleDialog.html',
          controller: 'moduleDialogController',
          controllerAs: 'vm',
          //targetEvent: ev,
          clickOutsideToClose: true,
          locals: {
              selectedModuleId: id
          }
      });
  };
}]);
}());