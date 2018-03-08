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
      when('/modulelist', {
        templateUrl: 'partials/moduleList.html',
        controller: 'moduleListController',
          controllerAs: 'vm',
          bindToController: true,
          replace: true      }).
      when('/systemmodellist', {
        templateUrl: 'partials/systemModelList.html',
        controller: 'systemModelListController',
          controllerAs: 'vm',
          bindToController: true,
          replace: true      }).
      when('/unitlist', {
        templateUrl: 'partials/unitList.html',
        controller: 'unitListController',
          controllerAs: 'vm',
          bindToController: true,
          replace: true      }).
       otherwise({
          redirectTo: '/unittypeslist'
      });
  }]);
}());
