(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('naviController',[ '$scope','naviService',function($scope, naviService){
      var vm = this;

      vm.showToolbar = false;
    
      vm.menu = [ { caption: "Units" , navigationPath: "unitlist"} , 
                  { caption: "UnitTypes" , navigationPath: "unittypeslist"} ,
                  { caption: "Modules" , navigationPath: "modulelist"} ,
                  { caption: "Reports" , navigationPath: "reports"} ,
                  { caption: "Export" , navigationPath: "export"} ];
        
        

      
      vm.goTo = function( index ) {
        var menuItem = vm.menu[index];
        naviService.navigateTo( menuItem.caption, menuItem.navigationPath );
      };

      vm.isNavigationMenuVisible = function () {
        return true;
      };

      $scope.$on('currentSystemModel', function(event, arg ) {
        if ( arg != null && arg.systemModelId !== 0 ) {
          vm.showToolbar = true;

          vm.goTo(0);
        }
      });

    }]);

}());