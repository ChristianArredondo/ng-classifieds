(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ($scope) => {

      $scope.name = {
        first: 'Christian',
        last: 'Arredondo'
      };

    });
})();