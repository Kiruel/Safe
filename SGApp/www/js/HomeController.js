var home = angular.module('home.controllers', []);

home.controller('homeCtrl', function($scope, Dservice) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  // Form data for the login modal
  $scope.client = {};
  $scope.spinner = true;

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

        console.log("TOTOTOTO" + $scope.client[0].perfomance);
        $scope.clientDetail = clients;
    });

  Dservice.getClientsTable(function(data) {
    $scope.client.prenom = data[36][2];
    $scope.client.clientId = data[36][0];
    $scope.client.risque = data[36][10];
    $scope.client.comptes = [];

    console.log($scope.client);
    Dservice.getAccountsTable(function (data) {
      // console.log(data);
      for(var i = 0; i < data.length; i++){
        if (data[i][1] == $scope.client.clientId)
        {
          $scope.client.comptes.push(data[i][5]);
          console.log($scope.client);
        }
      }
    })
  });
    // setTimeout(function(){ alert("Hello"); }, 3000);
  setTimeout(function () {

         // $(function () {
            $('#container').highcharts({
                labels:
                {
                    enabled: true
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                xAxis: {
                    categories: ['Comptes'],
                    labels: {
                        enabled: false
                    },
                },
                yAxis: {
                    min: -70,
                    max: 70,
                    showEmpty: false,
                    labels: {
                        formatter: function() {
                            return this.value;
                        },
                    },
                    title: {
                    text: null,
                    },
                    id: 'Clicks'
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: $scope.clientDetail[0].title,
                    data: [parseInt($scope.clientDetail[0].perfomance)]
                }, {
                    name: $scope.clientDetail[1].title,
                    data: [parseInt($scope.clientDetail[1].perfomance)]
                }, {
                    name: $scope.clientDetail[2].title,
                    data: [parseInt($scope.clientDetail[2].perfomance)]
                }]
            });
        // });
    }, 500);

    home.controller('ClientDetailCtrl', function($scope, $stateParams, Dservice) {
        $scope.clientId = {};
        // console.log($stateParams.clientId);
        $scope.clientId = Dservice.getClientId($stateParams.clientId, function (data) {
            console.log(data);
            $scope.clientId = data;
        });
        // console.log($scope.clientId);
    });
});
