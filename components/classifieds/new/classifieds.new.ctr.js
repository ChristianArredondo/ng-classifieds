(function() {
  'use strict';
  angular
    .module('ngClassifieds')
    .controller('newClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
      const vm = this;
      vm.saveClassified = saveClassified;

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

      function saveClassified(classified) {
        if (classified) {
          $scope.$emit('newClassified', {
            ...classified,
            contact: {
              name: 'Christian',
              phone: '(888) 888-8888',
              email: 'rofl@test.com'
            }
          });
          vm.sidenavOpen = false;
        }
      }

    });
})();