(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) => {

      const contact = {
        name: 'Christian',
        phone: '(888) 888-8888',
        email: 'rofl@test.com'
      };
      
      classifiedsFactory.getClassifieds().then(classifieds => {
        $scope.classifieds = classifieds.data;
        $scope.categories = getCategories($scope.classifieds);
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
          showToast('Classified saved!');
        }
      }

      $scope.editClassified = (classified) => {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.classified = classified;
      }

      $scope.saveEdit = () => {
        $scope.editing = false;
        $scope.classified = {};
        $scope.closeSidebar();
        showToast('Edit saved!');
      }

      $scope.deleteClassified = (event, classified) => {
        const confirm = $mdDialog.confirm()
          .title(`Are you sure you want to delete ${classified.title}?`)
          .ok('Yes')
          .cancel('No')
          .targetEvent(event)
        $mdDialog.show(confirm).then(
          () => {
            const index = $scope.classifieds.indexOf(classified);
            $scope.classifieds.splice(index, 1);
          },
          () => {}
        );
      }

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      function getCategories(classifieds) {
        const categories = classifieds.reduce((memo, val) => {
          if (memo.indexOf(val) < 0) {
            memo.push(...val.categories);
          }
          return memo;
        }, []);
        return _.uniq(categories);
      }

    });
})();