var portefeuille = angular.module('portefeuille.controllers', []);

portefeuille.controller('portefeuilleCtrl', function($scope, Dservice) {

console.log("Portefeuille controller");

$scope.client= {};

var clients = {};

Dservice.getClientsTableDetailed(function (data) {
	clients = [{
		id: 0,
		title: data[36][18],
		p_l: 2 + 3,
		perfomance: "po",
		perfomance_annual: "asdfadsf",
		volatilite: "",
		max_drawdown: "",
		tracking_error: ""
	}, {
		id: 1,
		title: data[36][24],
		p_l: 2 + 4,
		perfomance: "po",
		perfomance_annual: "asdfadsf",
		volatilite: "",
		max_drawdown: "",
		tracking_error: ""
	}, {
		id: 2,
		title: data[36][30],
		p_l: 2 + 6,
		perfomance: "po",
		perfomance_annual: "asdfadsf",
		volatilite: "",
		max_drawdown: "",
		tracking_error: ""
	}];
	console.log(data);
	$scope.client = clients;

	console.log($scope.client);
});

})
.controller('ClientDetailCtrl', function($scope, $stateParams, Dservice) {
	$scope.clientId = {};
	// console.log($stateParams.clientId);
 	$scope.clientId = Dservice.getClientId($stateParams.clientId, function (data) {
 		console.log(data);
 		$scope.clientId = data;
 	});
 	// console.log($scope.clientId);
});
