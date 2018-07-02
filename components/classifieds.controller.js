(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) => {

      const contact = {
        name: 'Christian',
        phone: '(888) 888-8888',
        email: 'rofl@test.com'
      };

      classifiedsFactory.getClassifieds().then(classifieds => {
        $scope.classifieds = classifieds.data;
      });

      $scope.openSidebar = () => {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = () => {
        $mdSidenav('left').close();
      }

      $scope.saveClassified = (classified) => {
        if (classified) {
          $scope.classifieds.push({
            contact,
            ...classified,
          });
          $scope.closeSidebar();
          $scope.classified = {};
          $mdToast.show(
            $mdToast.simple()
              .content('Classified saved!')
              .position('top, right')
              .hideDelay(3000)
          );
        }
      }

    });
})();