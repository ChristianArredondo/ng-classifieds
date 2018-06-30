angular
  .module('ngClassifieds', ['ngMaterial'])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  })
