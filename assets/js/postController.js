// Generated by CoffeeScript 1.10.0
angular.module('postController', ['ngMaterial', 'WPAPI', 'ngSanitize', 'ngMessages']).controller('PostCtrl', [
  '$scope', '$compile', '$routeParams', '$mdMedia', '$mdBottomSheet', 'PostService', 'TagService', 'CategoryService', 'CommentService', 'CommentSlugService', function($scope, $compile, $routeParams, $mdMedia, $mdBottomSheet, PostService, TagService, CategoryService, CommentService, CommentSlugService) {
    var buttonElement, buttonHtml;
    $scope.reply = {
      author_name: '',
      author_email: '',
      author_url: '',
      content: '',
      parent: 0
    };
    $scope.replyTo = 'Post';
    $scope.post = PostService.slug({
      slug: $routeParams.slug
    }, function() {
      return $scope.reply.post = $scope.post.id;
    });
    $scope.cats = CategoryService.queryObject();
    $scope.tags = TagService.queryObject();
    $scope.$mdMedia = $mdMedia;
    $scope.comments = CommentSlugService.query({
      slug: $routeParams.slug
    });
    $scope.post_comment = function() {
      return CommentService.save($scope.reply).$promise.then(function() {
        console.log(233);
        $scope.comments = CommentSlugService.query({
          slug: $routeParams.slug
        });
        $scope.hideBottomSheet();
        return $scope.reply.content = '';
      });
    };
    $scope.hideBottomSheet = function() {
      return $mdBottomSheet.hide();
    };
    $scope.replyToComment = function(commentId, commentName) {
      $scope.replyTo = commentName;
      $scope.reply.parent = commentId;
      return $scope.popComment();
    };
    $scope.replyToPost = function() {
      $scope.replyTo = 'Post';
      $scope.reply.parent = 0;
      return $scope.popComment();
    };
    $scope.popComment = function() {
      return $mdBottomSheet.show({
        templateUrl: 'assets/partial/comment-popup.html',
        controller: angular.noop,
        locals: {
          parent: $scope
        },
        controllerAs: 'commentCtrl',
        bindToController: true,
        clickOutsideToClose: false,
        disableBackdrop: true,
        escapeToClose: true,
        disableParentScroll: false
      });
    };
    buttonHtml = '<md-button class="md-fab md-fab-bottom-right" id="pop-comment-button" ng-click="popComment()">\n  <md-icon>comment</md-icon>\n</md-button>';
    buttonElement = $compile(buttonHtml)($scope);
    angular.element(document).find('body').append(buttonElement);
    $scope.$on('$destroy', function() {
      angular.element(document.querySelector('#pop-comment-button')).remove();
      return angular.element(document.querySelector('.comment-popup')).remove();
    });
  }
]);

//# sourceMappingURL=postController.js.map
