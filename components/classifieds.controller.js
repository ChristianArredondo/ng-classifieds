(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ($scope, $http, classifiedsFactory) => {

      classifiedsFactory.getClassifieds().then(classifieds => {
        $scope.classifieds = classifieds.data;
      });

    });
})();