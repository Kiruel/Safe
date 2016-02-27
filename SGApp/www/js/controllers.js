angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Dservice) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  Dservice.getClientsTable(function(data) {
    console.log(data);
  });
  $scope.data = {};
  $scope.data.hygiene = {name: 'Hygiene', data: [45, 49, 60, 11, 66, 57, 49]};
  $scope.data.sommeil = {name: 'Sommeil', data: [45, 12, 89, 81, 43, 54, 78]};
  $scope.data.sante = {name: 'Santé', data: [43, 76, 78, 12, 34, 90, 43]};
  $scope.data.alimentation = {name: 'Alimentation', data: [65, 59, 80, 81, 56, 55, 40]};

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
