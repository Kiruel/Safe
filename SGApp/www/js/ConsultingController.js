var consulting = angular.module('consulting.controllers', []);

consulting.controller('consultingCtrl', function($state, $scope, Dservice, SocketService) {

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
    console.log(id);
    console.log("Achter: "+id);
  }

  $scope.vendre = function (id) {
    SocketService.emit('buy_product', {prod: id, action: false});
    
    console.log("Vendre: "+id);
    // $scope.dataFromBanker.remove(function(el) { return el.id === id; });

  }

  var removeCard = function(id) {

  }



//   Object {id: 0, type: "Test", duration: 2, projection: Object, analysis: "Test 22"…}
// $$hashKey: "object:30"
// analysis: "Test 22"
// duration: 2
// id: 0
// projection: Object
// type: "Test"
// __proto__: Object


});
