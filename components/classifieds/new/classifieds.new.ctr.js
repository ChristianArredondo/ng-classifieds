(function() {
  'use strict';
  angular
    .module('ngClassifieds')
    .controller('newClassifiedsCtrl', function($mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
      const vm = this;

      $timeout(function() {
        $mdSidenav('left').open();
      });
    })
})();