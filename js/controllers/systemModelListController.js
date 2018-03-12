(function () {
'use strict';

var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');

runtimeUnitCatalogApp.controller('systemModelListController',['systemModelService' ,'$mdDialog','naviService',function( systemModelService ,$mdDialog,naviService) {
  var vm = this;   
  vm.modelList = [];
  
  systemModelService.getAllSystemModels().then( function ( models ) {
      vm.modelList = models;
  });
              
  vm.delete = function( modelId )
  {
      systemModelService.deleteSystemModel(modelId).then ( function() {
          systemModelService.getAllSystemModels().then(function( models ) { 
              vm.modelList = models;
          });
      });
  };

  vm.showAddDialog = function() {
      vm.showModuleDialog(0).then( function() {
          systemModelService.getAllSystemModels().then(function( models ) { 
              vm.modelList = models;
          });                    
      });
  };
  vm.showUpdateDialog = function( id ) {
      vm.showModuleDialog(id).then( function() {
          systemModelService.getAllSystemModels().then(function( models ) { 
              vm.modelList = models;
          });
      });
  };

  vm.showModuleDialog = function ( id) {
      return $mdDialog.show({
          templateUrl: 'partials/systemModelDialog.html',
          controller: 'systemModelDialogController',
          controllerAs: 'vm',
          //targetEvent: ev,
          clickOutsideToClose: true,
          locals: {
              selectedSystemModelId: id
          }
      });
  };

  vm.selectModel = function(index) {

  };
}]);
}());