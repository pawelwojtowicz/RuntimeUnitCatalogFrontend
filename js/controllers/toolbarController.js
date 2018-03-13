(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('toolbarController',['$scope','$mdSidenav',function($scope,$mdSidenav){
      var vm = this;
      vm.systemModelName = "";
      vm.currentDialog = "";

      $scope.$on('currentSystemModel', function(event, arg ) {
        if ( arg != null && arg.systemModelId !== 0 ) {
          vm.systemModelName = arg.name;
        } else {
          vm.systemModelName = "";
        }
      });

      $scope.$on('currentPage' , function(event , dialogTitle ){
        vm.currentDialog = dialogTitle;
      } );
    
    }]);

}());
