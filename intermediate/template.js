angular.module('runtimeUnitCatalogApp').run(['$templateCache', function($templateCache) {
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
