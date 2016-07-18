// Generated by CoffeeScript 1.10.0
angular.module('EpixAngularMaterialWPApp', ['ngMaterial', 'ngRoute', 'ngMessages', 'headerController', 'indexController', 'postController']).config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'assets/partial/index.html',
      controller: 'IndexCtrl'
    }).when('/post/:slug', {
      templateUrl: 'assets/partial/post.html',
      controller: 'PostCtrl'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }
]).factory('TemplateURLProcessor', function($q) {
  return {
    request: function(config) {
      if (config.url.startsWith('assets/')) {
        config.url = TEMPLATE_URL + config.url;
      }
      return config;
    }
  };
}).config([
  '$httpProvider', function($httpProvider) {
    return $httpProvider.interceptors.push('TemplateURLProcessor');
  }
]);

//# sourceMappingURL=app.js.map
