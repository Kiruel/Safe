var home = angular.module('home.controllers', []);

home.controller('homeCtrl', function($scope, Dservice) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  // Form data for the login modal
  $scope.client = {};

  Dservice.getClientsTable(function(data) {
    console.log(data[1][0]);
    $scope.client.prenom = data[1][2];

    console.log($scope.client);
  });

});
