(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .directive('classifiedCard', function() {
      return {
        templateUrl: 'components/classifieds/card/classified-card.tpl.html',
        scope: {
          classifieds: '=',
          classifiedsFilter: '=',
          category: '='
        },
        controller: classifiedCardController,
        controllerAs: 'vm'
      }

      function classifiedCardController() {

        const vm = this;
        vm.editClassified = editClassified;
        vm.deleteClassified = deleteClassified;

        function editClassified(classified) {
          $state.go('classifieds.edit', {
            classified,
            id: classified.id
          })
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
      }
    })
})();