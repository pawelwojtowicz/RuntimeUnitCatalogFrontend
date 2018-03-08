(function () {
'use strict';

var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');

runtimeUnitCatalogApp.controller('moduleListController',['moduleService' ,'$mdDialog',function( moduleService ,$mdDialog) {
  var vm = this;   
  vm.moduleList = [];

  moduleService.getAllModules().then( function ( modules ) {
      vm.moduleList = modules;
  });
              
  vm.delete = function( moduleId )
  {
      moduleService.deleteModule(moduleId).then ( function() {
          moduleService.getAllModules().then(function( modules ) { 
              vm.moduleList = modules;
          });
      });
  };

  vm.showAddDialog = function() {
      vm.showModuleDialog(0).then( function() {
          moduleService.getAllModules().then(function( modules ) { 
              vm.moduleList = modules;
          });                    
      });
  };
  vm.showUpdateDialog = function( id ) {
      vm.showModuleDialog(id).then( function() {
          moduleService.getAllModules().then(function( modules ) { 
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