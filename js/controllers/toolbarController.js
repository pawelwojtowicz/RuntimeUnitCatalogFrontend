(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('toolbarController',['$mdSidenav',function($mdSidenav){
      var vm = this;

      vm.toggle = function() {
        $mdSidenav('left').toggle();
      };
    
    }]);

}());
