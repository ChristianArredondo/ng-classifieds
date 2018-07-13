(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

      const vm = this;
      vm.categories;
      vm.classifieds; 
      vm.closeSidebar = closeSidebar;
      vm.editing;
      vm.openSidebar = openSidebar;
      vm.saveClassified = saveClassified;
      vm.saveEdit = saveEdit;

      $scope.$on('newClassified', function(event, classified) {
        vm.classifieds.push({
          ...classified,
          id: vm.classifieds.length + 1
        });
        showToast('Classified added!')
      });

      $scope.$on('editSaved', function(event, message) {
        showToast(message);
      });
      
      classifiedsFactory.getClassifieds().then(classifieds => {
        vm.classifieds = classifieds.data;
        vm.categories = getCategories(vm.classifieds);
      });

      function openSidebar() {
        $state.go('classifieds.new');
      }

      function closeSidebar() {
        $mdSidenav('left').close();
      }

      function saveClassified(classified) {
        if (classified) {
          vm.classifieds.push({
            contact,
            ...classified,
          });
          closeSidebar();
          vm.classified = {};
          showToast('Classified saved!');
        }
      }

      function saveEdit() {
        vm.editing = false;
        vm.classified = {};
        closeSidebar();
        showToast('Edit saved!');
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