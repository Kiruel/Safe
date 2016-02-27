var home = angular.module('home.controllers', []);

home.controller('homeCtrl', function($scope, Dservice) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  // Form data for the login modal
  Dservice.getClientsTable(function(data) {
    console.log(data);
  });

});
