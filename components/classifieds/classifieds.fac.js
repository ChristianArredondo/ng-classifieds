(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory', ($http) => {

      function getClassifieds() {
        return $http.get('../data/classifieds.json')
      }

      return {
        getClassifieds: getClassifieds
      }
    });
})();