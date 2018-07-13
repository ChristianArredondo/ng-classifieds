(function() {
  'use strict';
  angular
    .module('ngClassifieds')
    .controller('editClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
      const vm = this;
      vm.saveEdit = saveEdit;
      vm.classified = $state.params.classified;

      $timeout(function() {
        $mdSidenav('left').open();
      });

      $scope.$watch('vm.sidenavOpen', function(value) {
        if (value === false) {
          $mdSidenav('left').close().then(function() {
            $state.go('classifieds');
          })
        }
      });

      function saveEdit() {
        $scope.$emit('editSaved', 'Edit saved!');
        vm.sidenavOpen = false;
      }

    });
})();