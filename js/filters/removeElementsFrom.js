(function () {
'use strict';

  var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
  runtimeUnitCatalogApp.filter('removeElementsFrom', function() {
  return function( inputTable , exclusionTable ) {
    var filterOutput = [];
    
    angular.forEach( inputTable, function (item) {
      var found = false;
      
      angular.forEach( exclusionTable, function ( excludingItem ) {
        if (angular.equals(item, excludingItem)) {
          found = true;

        }
      });
      
      if (!found) {
        filterOutput.push(item);
      }
    });
    
    return filterOutput;
  };
} );
}());