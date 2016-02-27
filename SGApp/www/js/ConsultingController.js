var consulting = angular.module('consulting.controllers', []);

consulting.controller('consultingCtrl', function($state, $scope, Dservice, SocketService) {

  console.log("Consulting controller");
  $scope.dataFromBanker = [];
  var i = 0;
  SocketService.on('push_from_banker', function(data){
    if (data)
    {
      $state.go($state.current, {}, {reload: true});
      $scope.dataFromBanker = [{i:data}].concat($scope.dataFromBanker);
      i++;
    }
  });

//   Object {id: 0, type: "Test", duration: 2, projection: Object, analysis: "Test 22"…}
// $$hashKey: "object:30"
// analysis: "Test 22"
// duration: 2
// id: 0
// projection: Object
// type: "Test"
// __proto__: Object


});
