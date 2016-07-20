angular
.module 'postController', ['ngMaterial', 'WPAPI', 'ngSanitize']
.controller 'PostCtrl', ['$scope', '$mdMedia', '$routeParams', 'PostService', 'TagService', 'CategoryService',
  'CommentService', 'CommentSlugService',
  ($scope, $mdMedia, $routeParams, PostService, TagService, CategoryService, CommentService, CommentSlugService)->
    $scope.post = PostService.slug {slug: $routeParams.slug}
    $scope.cats = CategoryService.queryObject()
    $scope.tags = TagService.queryObject()
    $scope.$mdMedia = $mdMedia;
    $scope.comments = CommentSlugService.query {slug: $routeParams.slug}
    return
]
