/*! runtimeUnitInventory - v1.0.0 - 2018-03-08 */(function () {
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

(function () {
'use strict';
var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');

runtimeUnitCatalogApp.service("appConfig", [function() {

    var vm =this;
    
    vm.ip = "127.0.0.1";
    vm.port = "8080";

    this.getServiceUrl = function() {
        return "http://"+vm.ip+":"+vm.port;
    };

}]);
}());
(function () {
'use strict';
var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');

runtimeUnitCatalogApp.service("moduleService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
	var vm = this;
	vm.url = appConfig.getServiceUrl() + "/modules";
	vm.moduleUpdateCallbacks = [];

	vm.addModule = function (newModule ) {
		return $q(function( resolve, reject ){
			$http({	url: vm.url,
					method: "POST",
					data: newModule,
					headers: {'Content-Type': 'application/json'}}).then (
					function( response) {
						resolve();
					} , function ()
					{
						reject();
					});
				});
	};

	vm.getAllModules = function() {
		return $q( function(resolve, reject) {
			$http.get(vm.url).then( function( response) {
				resolve(response.data);
			},function(error) {
				reject();
			});
		});
	};

	vm.getModuleById = function( moduleId ) {
		return $q ( function( resolve, reject ) {
			var requestUrl = vm.url+'/'+moduleId;
			$http.get(requestUrl).then( function( response) {
				resolve(response.data);
			},function(error) {
				reject( error );
			});
		});
	};

		
	vm.deleteModule = function( moduleId) {
		var urlForDeleting = vm.url + "/" + String(moduleId);
		return $http.delete(urlForDeleting);
	};
	

}]);
}());
(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("systemModelService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/systemmodel";
    
        vm.addSystemModel = function ( systemModel ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: systemModel,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getSystemModelById = function( systemModelId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(systemModelId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllSystemModels = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteSystemModel = function( systemModelId ) {
            var urlForDeleting = vm.url + "/" + String(systemModelId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());
(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service('unitDependencyService', [ '$http', 'appConfig', '$q' , function($http,appConfig,$q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unitdependency";   
    
        vm.addDependency = function ( unitId, requiredUnitId ) {
            var urlForRequest = vm.url + "/" + unitId + "/" + requiredUnitId;
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: {},
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function () {
                            reject();
                        });
            });
        };   
            
        vm.deleteDependency = function( unitId, requiredUnitId) {
            return $q(function( resolve, reject ){
            var urlForRequest = vm.url + "/" + unitId + "/" + requiredUnitId;
            $http({	url: urlForRequest,
                        method: "DELETE",
                        data: {},
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };    

    
    }]);
    }());
(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("unitService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unit";
    
        vm.addUnit = function ( unit ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: unit,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getUnitById = function( unitId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(unitId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllUnits = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteUnit = function( unitId ) {
            var urlForDeleting = vm.url + "/" + String(unitId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());
(function () {
    'use strict';
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.service("unitTypeService", ['$http', 'appConfig', '$q' ,function($http,appConfig, $q) {
        var vm = this;
        vm.url = appConfig.getServiceUrl() + "/unittype";
        vm.moduleUpdateCallbacks = [];
    
        vm.addUnitType = function (unitType ) {
            return $q(function( resolve, reject ){
                $http({	url: vm.url,
                        method: "POST",
                        data: unitType,
                        headers: {'Content-Type': 'application/json'}}).then (
                        function( response) {
                            resolve();
                        } , function ()
                        {
                            reject();
                        });
                    });
        };

        vm.getUnitTypeById = function( unitTypeId ) {
            return $q ( function( resolve, reject ) {
                var requestUrl = vm.url+'/'+String(unitTypeId);
                $http.get(requestUrl).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject( error );
                });
            });
        };
        
        vm.getAllUnitTypes = function() {
            return $q( function(resolve, reject) {
                $http.get(vm.url).then( function( response) {
                    resolve(response.data);
                },function(error) {
                    reject();
                });
            });
        };
        
        vm.deleteUnitType = function( unitTypeId) {
            var urlForDeleting = vm.url + "/" + String(unitTypeId);
            return $http.delete(urlForDeleting);
        };
        
    
    }]);
}());






(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitTypeDialogController',['selectedUnitTypeId','unitTypeService','$mdDialog' ], function(selectedUnitTypeId,unitTypeService,$mdDialog){
    
      var vm = this;
      vm.dialogTitle = "Add Runtime Unit Type";
      vm.unitTypeId = selectedUnitTypeId;
      vm.name = "";
      vm.description = "";
    
      if ( 0 != vm.unitTypeId) {
        vm.dialogTitle = "Edit Runtime Unit Type";
        
        unitTypeService.getUnitTypeById(vm.unitTypeId).then( function( receivedUnitTypeInfo ) {
          vm.name = receivedUnitTypeInfo.name;
          vm.description = receivedUnitTypeInfo.description;
        } , function( error ){
        });
      }
      
      vm.saveUnitType = function() {
        var unitType = {
          unitTypeId : vm.unitTypeId,
          name : vm.name,
          description : vm.description
        };
        
        vm.addUnitType(unitType).then( function() {
          $mdDialog.hide();
        });

      };
      
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    });

}());
(function () {
    'use strict';
    
    var runtimeUnitCatalogApp = angular.module('runtimeUnitCatalogApp');
    
    runtimeUnitCatalogApp.controller('unitTypeListController',['unitTypeService' ,'$mdDialog',function( unitTypeService ,$mdDialog)
        {
            var vm = this;   
            vm.unitTypeList = [];

            unitTypeService.getAllUnitTypes().then( function (unitTypes) {
                vm.unitTypeList = configItems;
            });
                        
            vm.deleteUnitType = function( configItemId )
            {
                unitTypeService.deleteConfigItem(configItemId).then ( function() {
                    unitTypeService.getAllUnitTypes().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };
    
            vm.showAddDialog = function() {
                vm.showUnitTypeDialog(0).then( function() {
                    unitTypeService.getAllUnitTypes().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });                    
                });
            };
            vm.showUpdateDialog = function( id ) {
                vm.showUnitTypeDialog(id).then( function() {
                    unitTypeService.getAllConfigItems().then(function( unitTypes) { 
                        vm.unitTypeList = unitTypes;
                    });
                });
            };

            vm.showUnitTypeDialog = function ( id) {
                return $mdDialog.show({
                    templateUrl: 'partials/unitTypeDialog.html',
                    controller: 'unitTypeDialogController',
                    controllerAs: 'vm',
                    //targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        selectedUnitTypeId: id
                    }
                });
            };
    
        }]);
    }());
angular.module('configurationApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/moduleDialog.html',
    ""
  );


  $templateCache.put('partials/moduleList.html',
    ""
  );


  $templateCache.put('partials/systemModelDialog.html',
    ""
  );


  $templateCache.put('partials/systemModelList.html',
    ""
  );


  $templateCache.put('partials/unitDialog.html',
    ""
  );


  $templateCache.put('partials/unitList.html',
    ""
  );


  $templateCache.put('partials/unitTypeDialog.html',
    "<md-dialog aria-label=\"Unit Type\" style=\"width: 500px\"><md-toolbar><div class=md-toolbar-tools><h2>{{vm.dialogTitle}}</h2><span flex=\"\"></span></div></md-toolbar><md-dialog-content class=mat-button><span flex=\"\"><md-input-container><label>Unit type name</label><input ng-model=vm.name></md-input-container><br><md-input-container><label>Description</label><input ng-model=vm.description></md-input-container><br></span></md-dialog-content><md-dialog-actions class=mat-dialog-actions><md-button class=mat-button ng-click=vm.saveUnitType()><span class=mat-button-wrapper>Add</span><div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div><div class=mat-button-focus-overlay></div></md-button><md-button class=mat-button ng-click=vm.cancel()><span class=mat-button-wrapper>Cancel</span><div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div><div class=mat-button-focus-overlay></div></md-button></md-dialog-actions></md-dialog>"
  );


  $templateCache.put('partials/unitTypeList.html',
    "<div><table border=1 style=width:100%><tr><td>Name</td><td>Description</td><td>Actions</td></tr><tr ng-repeat=\"unitType in vm.unitTypeList\"><td>{{unitType.name}}</td><td>{{unitType.description}}</td><td><md-icon md-svg-src=/assets/edit.svg aria-label=\"Edit \" ng-click=vm.showUpdateDialog(unitType.unitTypeId)></md-icon><md-icon md-svg-src=/assets/delete.svg aria-label=\"Edit \" ng-click=vm.deleteUnitType(unitType.unitTypeId)></md-icon></td></tr></table><md-button class=\"md-primary md-raised\" ng-click=vm.showAddDialog()>Add unit type</md-button></div>"
  );

}]);
