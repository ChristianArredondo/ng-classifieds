angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(($mdThemingProvider, $stateProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('one', {
        url: '/stateone',
        template: '<h1>{{ stateOne.message }}</h1>',
        controller: 'stateOneCtrl as stateOne'
      })
      .state('two', {
        url: '/statetwo',
        template: '<h1>State Two</h1> <md-button ui-sref="two.more">Nested state</md-button> <ui-view></ui-view>'
      })
      .state('two.more', {
        url: '/more',
        template: '<p>Deeper state</p>'
      })
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  })
  .controller('stateOneCtrl', function() {
    const vm = this;
    vm.message = 'Hello from state one';
  });
