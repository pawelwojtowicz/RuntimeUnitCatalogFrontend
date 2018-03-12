(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('toolbarController',['$scope','$mdSidenav',function($scope,$mdSidenav){
      var vm = this;
      vm.systemModelName = "TestModel";
    
    }]);

}());
