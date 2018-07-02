(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ($scope, $http, classifiedsFactory, $mdSidenav) => {

      classifiedsFactory.getClassifieds().then(classifieds => {
        $scope.classifieds = classifieds.data;
      });

      $scope.openSidebar = () => {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = () => {
        $mdSidenav('left').close();
      }

    });
})();