// Generated by CoffeeScript 1.10.0
angular.module('headerController', ['ngMaterial']).controller('HeaderCtrl', [
  '$scope', '$mdSidenav', function($scope, $mdSidenav) {
    return $scope.openLeft = function() {
      return $mdSidenav('left').open();
    };
  }
]);

//# sourceMappingURL=headerController.js.map
