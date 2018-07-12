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
      })
      .state('classifieds.new', {
        url: '/new',
        templateUrl: '../components/classifieds/new/classifieds.new.tpl.html',
        controller: 'newClassifiedsCtrl as vm'
      })
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  });