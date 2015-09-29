// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  Parse.initialize("RAxSwXAaCAnU0gDMerYZyzlVUYG1XJPTjnf1SxkT", "i3LCpXVDwWIgUlqcEBdrncGQeBKuT9HG9lWuDrK4");
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.leaves', {
    url: '/leaves',
    views: {
      'menuContent': {
        templateUrl: 'templates/leaves.html'
      }
    }
  })

  .state('app.articles', {
    url: '/articles',
    views: {
      'menuContent': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.article', {
    url: '/article/:articleId?type',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'ArticleCtrl'
      }
    }
  })

  .state('app.register', {
    url: '/register',
    views: {
      'menuContent' : {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/articles');
});
