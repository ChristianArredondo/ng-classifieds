(function() {
  'use strict';
  angular
    .module('ngClassifieds')
    .controller('newClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
      const vm = this;

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
    })
})();