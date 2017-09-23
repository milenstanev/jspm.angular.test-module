import {
  angular, CoreModule
} from 'angular-core';

export const featureModule = angular.module(
  'testModule', [CoreModule]
  )
  .config([
    '$stateProvider', '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('test', {
          url: '/test',
          component: 'testComponent'
        });
    }
  ]).component(
    'testComponent',
    {
      template: 'Test Module view ...'
    }
  )
  .name;
