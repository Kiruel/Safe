angular.module('starter.controllers', [])

.controller('NotificationsCtrl', function($scope) {
  var notifications = [
    {title: 'lol'}
  ];

  $scope.notifications = notifications;
})

.controller('ProfilesCtrl', function($scope, Clients) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.clients = Clients.all();
})

.controller('ProfileDetailCtrl', function($scope, $stateParams, Clients) {
  $scope.client = Clients.get($stateParams.profileId);
})

.controller('OpportunitiesCtrl', function($scope, SocketService) {
   SocketService.on('message', function(msg){
    console.log(msg);
  });
});
