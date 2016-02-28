var consulting = angular.module('consulting.controllers', []);

consulting.controller('consultingCtrl', function($state, $scope, Dservice, SocketService, $location) {

 analytics.page($location.url());
  console.log("Consulting controller");
  $scope.dataFromBanker = [];
  $scope.chart = {};

  var cardNumber = 0;
  SocketService.on('push_from_banker', function(data){
    if (data)
    {
      $state.go($state.current, {}, {reload: true});
      $scope.dataFromBanker = [{cardNumber:data}].concat($scope.dataFromBanker);
      $scope.dataFromBanker.cardNumber = cardNumber;
      cardNumber++;
    }
  });

  $scope.acheter = function (id) {
    SocketService.emit('buy_product', {prod: id, action: true});
    // console.log(id);
    // console.log("Achter: "+id);
    analytics.track("product_bought");

  }

  $scope.vendre = function (id) {
    SocketService.emit('buy_product', {prod: id, action: false});
    // console.log("Vendre: "+id);
    analytics.track("product_sold");


  }

});
