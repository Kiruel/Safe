var portefeuille = angular.module('portefeuille.controllers', []);

portefeuille.controller('portefeuilleCtrl', function($scope, Dservice, $location) {

     analytics.page($location.url());
console.log("Portefeuille controller");

$scope.client= {};

var clients = {};

Dservice.getClientsTableDetailed(function (data) {
	clients = [{
		id: 0,
		title: data[36][18],
		p_l: parseFloat(data[36][17].replace(/\s/g, "")) - parseFloat(data[36][16].replace(/\s/g, "")),
		perfomance: ((parseFloat(data[36][17].replace(/\s/g, "")) - parseFloat(data[36][16].replace(/\s/g, ""))) / parseFloat(data[36][16].replace(/\s/g, "")) * 100).toFixed(2),
		perfomance_annual: "asdfadsf",
		volatilite: "",
		max_drawdown: "",
		tracking_error: ""
	}, {
		id: 1,
		title: data[36][24],
		p_l: parseFloat(data[36][23].replace(/\s/g, "")) - parseFloat(data[36][22].replace(/\s/g, "")),
		perfomance: ((parseFloat(data[36][23].replace(/\s/g, "")) - parseFloat(data[36][22].replace(/\s/g, ""))) / parseFloat(data[36][22].replace(/\s/g, "")) * 100).toFixed(2),
		perfomance_annual: "asdfadsf",
		volatilite: "",
		max_drawdown: "",
		tracking_error: ""
	}, {
		id: 2,
		title: data[36][30],
		p_l: parseFloat(data[36][29].replace(/\s/g, "")) - parseFloat(data[36][28].replace(/\s/g, "")),
		perfomance: ((parseFloat(data[36][29].replace(/\s/g, "")) - parseFloat(data[36][28].replace(/\s/g, ""))) / parseFloat(data[36][28].replace(/\s/g, "")) * 100).toFixed(2),
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

 		$scope.clientId = data;
 		analytics.track("on_click_detail_account");
 	});

 	// console.log($scope.clientId);
});
