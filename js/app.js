(function () {
'use strict';

var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp', ['ngMaterial','ngRoute']);

runtimeUnitCatalogApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/unittypeslist', {
        templateUrl: 'partials/unitTypeList.html',
        controller: 'unitTypeListController',
          controllerAs: 'vm',
          bindToController: true,
          replace: true      }).
       otherwise({
          redirectTo: '/unittypeslist'
      });
  }]);
}());
