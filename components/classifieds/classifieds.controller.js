(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

      const vm = this;
      vm.categories;
      vm.classifieds;
      vm.closeSidebar = closeSidebar;
      vm.deleteClassified = deleteClassified;
      vm.editClassified = editClassified;
      vm.editing;
      vm.openSidebar = openSidebar;
      vm.saveClassified = saveClassified;
      vm.saveEdit = saveEdit;
      
      const contact = {
        name: 'Christian',
        phone: '(888) 888-8888',
        email: 'rofl@test.com'
      };
      
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

      function editClassified(classified) {
        vm.editing = true;
        openSidebar();
        vm.classified = classified;
      }

      function saveEdit() {
        vm.editing = false;
        vm.classified = {};
        closeSidebar();
        showToast('Edit saved!');
      }

      function deleteClassified(event, classified) {
        const confirm = $mdDialog.confirm()
          .title(`Are you sure you want to delete ${classified.title}?`)
          .ok('Yes')
          .cancel('No')
          .targetEvent(event)
        $mdDialog.show(confirm).then(
          () => {
            const index = vm.classifieds.indexOf(classified);
            vm.classifieds.splice(index, 1);
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