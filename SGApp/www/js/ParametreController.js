var parametres = angular.module('parametres.controllers', []);

parametres.controller('parametreCtrl', function($state, $scope, Dservice, SocketService, $location) {
     analytics.page($location.url());

});
