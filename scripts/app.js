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
      .state('classifieds.edit', {
        url: '/edit/:id',
        templateUrl: '../components/classifieds/edit/classifieds.edit.tpl.html',
        controller: 'editClassifiedsCtrl as vm',
        params: {
          classified: null,
          id: null
        }
      })
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  });