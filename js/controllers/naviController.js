(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('naviController',['naviService',function(naviService){
      var vm = this;

      vm.showToolbar = true;
    
      vm.menu = [ { caption: "Units" , navigationPath: "unitlist"} , 
                  { caption: "UnitTypes" , navigationPath: "unittypeslist"} ,
                  { caption: "Modules" , navigationPath: "modulelist"} ,
                  { caption: "Reports" , navigationPath: "reports"} ,
                  { caption: "Export" , navigationPath: "export"} ];
        
        

      
      vm.goTo = function( page ) {
        naviService.navigateTo( page );
      };
    }]);

}());