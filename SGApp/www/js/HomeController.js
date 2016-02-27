var home = angular.module('home.controllers', []);

home.controller('homeCtrl', function($scope, Dservice) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  // Form data for the login modal
  $scope.client = {};

  Dservice.getClientsTable(function(data) {
    $scope.client.prenom = data[36][2];
    $scope.client.clientId = data[36][0];
    $scope.client.risque = data[36][10];

    console.log($scope.client);
    Dservice.getAccountsTable(function (data) {
      console.log(data);
    })
  });

  Highcharts.chart('container', {
         chart: {
             type: 'solidgauge',
             marginTop: 50
         },
         title: {
             text: 'Activity',
             style: {
                 fontSize: '24px'
             }
         },
         tooltip: {
             borderWidth: 0,
             backgroundColor: 'none',
             shadow: false,
             style: {
                 fontSize: '16px'
             },
             pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
             positioner: function (labelWidth, labelHeight) {
                 return {
                     x: 200 - labelWidth / 2,
                     y: 180
                 };
             }
         },
         pane: {
             startAngle: 0,
             endAngle: 360,
             background: [{ // Track for Move
                 outerRadius: '112%',
                 innerRadius: '88%',
                //  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth: 0
             }, { // Track for Exercise
                 outerRadius: '87%',
                 innerRadius: '63%',
                //  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                 borderWidth: 0
             }, { // Track for Stand
                 outerRadius: '62%',
                 innerRadius: '38%',
                //  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                 borderWidth: 0
             }]
         },
         yAxis: {
             min: 0,
             max: 100,
             lineWidth: 0,
             tickPositions: []
         },
         plotOptions: {
             solidgauge: {
                 borderWidth: '34px',
                 dataLabels: {
                     enabled: false
                 },
                 linecap: 'round',
                 stickyTracking: false
             }
         },

         series: [{
             name: 'Move',
             borderColor: Highcharts.getOptions().colors[0],
             data: [{
                //  color: Highcharts.getOptions().colors[0],
                 radius: '100%',
                 innerRadius: '100%',
                 y: 80
             }]
         }, {
             name: 'Exercise',
             borderColor: Highcharts.getOptions().colors[1],
             data: [{
                //  color: Highcharts.getOptions().colors[1],
                 radius: '75%',
                 innerRadius: '75%',
                 y: 65
             }]
         }, {
             name: 'Stand',
             borderColor: Highcharts.getOptions().colors[2],
             data: [{
                //  color: Highcharts.getOptions().colors[2],
                 radius: '50%',
                 innerRadius: '50%',
                 y: 50
             }]
         }]
     },

     /**
      * In the chart load callback, add icons on top of the circular shapes
      */
     function callback() {

         // Move icon
         this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
             .attr({
                 'stroke': '#303030',
                 'stroke-linecap': 'round',
                 'stroke-linejoin': 'round',
                 'stroke-width': 2,
                 'zIndex': 10
             })
            //  .translate(190, 26)
            //  .add(this.series[2].group);

         // Exercise icon
         this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
             .attr({
                 'stroke': '#303030',
                 'stroke-linecap': 'round',
                 'stroke-linejoin': 'round',
                 'stroke-width': 2,
                 'zIndex': 10
             })
            //  .translate(190, 61)
            //  .add(this.series[2].group);

         // Stand icon
         this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
             .attr({
                 'stroke': '#303030',
                 'stroke-linecap': 'round',
                 'stroke-linejoin': 'round',
                 'stroke-width': 2,
                 'zIndex': 10
             })
            //  .translate(190, 96)
            //  .add(this.series[2].group);
     });

  // $scope.chartParams = {};

  // $scope.chartParams.data = [300, 500, 100];

});
