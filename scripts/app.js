angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(($mdThemingProvider, $stateProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('classifieds', {
        url: '/classifieds',
        templateUrl: '../components/classifieds/classifieds.tpl.html',
        controller: 'classifiedsCtrl as vm'
      });
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  });