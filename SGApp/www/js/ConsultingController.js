var consulting = angular.module('consulting.controllers', []);

consulting.controller('consultingCtrl', function($scope, Dservice, SocketService) {

  console.log("Consulting controller");
  SocketService.on('message', function(msg){
    console.log(msg);
  });


});
