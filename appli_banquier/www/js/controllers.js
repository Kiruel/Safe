angular.module('starter.controllers', [])

.controller('NotificationsCtrl', function($scope, Notifications, SocketService, $state, $location) {
  analytics.page($location.url());

  $scope.notifications = Notifications.all();

  setInterval(function() {
    $scope.notifications = Notifications.all();
  }, 200);

  var uid = 1;

  SocketService.on('buy_product', function(msg) { 
    console.log(msg);   

    Notifications.append({
      id: uid,
      title: 'Test',
      informations: '',
      clientFullName: 'Sophie Heflin'
    });
    analytics.track('notification_received');
    $state.go($state.current, {}, {reload: true});
    uid += 1;
  });

  $scope.removeNotification = function(notification) {
    Notifications.remove(notification);
    analytics.track('notification_removed');
  };

})

.controller('NotificationDetailCtrl', function($scope, $stateParams, Notifications, $location, $route) {
  analytics.page($location.url());
  $scope.notification = Notifications.get($stateParams.notificationId);
  $scope.removeNotification = function(notification) {
    analytics.track('notification_removed');
    Notifications.remove(notification);
    $location.path('#/tabs/notifications');
  };
})
.controller('ProfileDetailCtrl', function($scope, $stateParams, Clients) {
  $scope.client = Clients.get($stateParams.profileId);
})

.controller('ProfilesCtrl', function($scope, Clients, Dservice, lodash, $location) {
  analytics.page($location.url());
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.clients = Clients.all();
})

.controller('ProfileDetailCtrl', function($scope, $stateParams, Clients, $location) {
  analytics.page($location.url());
  $scope.client = Clients.get($stateParams.profileId);
  $(function () {
    var seriesOptions = [],
      seriesCounter = 0,
        names = ['MSFT', 'AAPL', 'GOOG'];

        function createChart() {
          $('#container').highcharts('StockChart', {
            rangeSelector: {
              selected: 4
            },

            yAxis: {
              labels: {
                formatter: function () {
                  return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
              },
              plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
              }]
            },

            plotOptions: {
              series: {
                compare: 'percent'
              }
            },

            tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
              valueDecimals: 2
            },

            series: seriesOptions
          });
        }

        $.each(names, function (i, name) {

          $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

            seriesOptions[i] = {
              name: name,
              data: data
            };

            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;

            if (seriesCounter === names.length) {
              createChart();
            }
          });
        });
  });
})

.controller('OpportunitiesCtrl', function($scope, SocketService, Opportunities, $location) {
  analytics.page($location.url());

  $scope.opportunities = Opportunities.all();
  SocketService.on('message', function(msg){
  });

  $scope.discardOpportunity = function(opportunity) {
    Opportunities.remove(opportunity);
    analytics.track('opportunity_discarded');
  }

  $scope.sendOpportunity = function(opportunity) {
    SocketService.emit('push_from_banker', opportunity);
    analytics.track('opportunity_sent');
    opportunity.sent = true;
  }

$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?",function(e){$("#container0").highcharts("StockChart",{rangeSelector:{selected:0},title:{text:"Analyse"},tooltip:{style:{width:"200px"},valueDecimals:4,shared:!0},yAxis:{title:{text:"Exchange rate"}},series:[{name:"USD to EUR",data:e,id:"dataseries"},{type:"flags",data:[{x:Date.UTC(2015,5,8),title:"C",text:"Stocks fall on Greece, rate concerns; US dollar dips"},{x:Date.UTC(2015,5,12),title:"D",text:"Zimbabwe ditches 'worthless' currency for the US dollar "},{x:Date.UTC(2015,5,19),title:"E",text:"US Dollar Declines Over the Week on Rate Timeline"},{x:Date.UTC(2015,5,26),title:"F",text:"Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally "},{x:Date.UTC(2015,5,29),title:"G",text:"Euro records stunning reversal against dollar"},{x:Date.UTC(2015,5,30),title:"H",text:"Surging US dollar curbs global IT spend"}],onSeries:"dataseries",shape:"circlepin",width:16}]})})});
$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?",function(e){$("#container1").highcharts("StockChart",{rangeSelector:{selected:0},title:{text:"Analyse"},tooltip:{style:{width:"200px"},valueDecimals:4,shared:!0},yAxis:{title:{text:"Exchange rate"}},series:[{name:"USD to EUR",data:e,id:"dataseries"},{type:"flags",data:[{x:Date.UTC(2015,5,8),title:"C",text:"Stocks fall on Greece, rate concerns; US dollar dips"},{x:Date.UTC(2015,5,12),title:"D",text:"Zimbabwe ditches 'worthless' currency for the US dollar "},{x:Date.UTC(2015,5,19),title:"E",text:"US Dollar Declines Over the Week on Rate Timeline"},{x:Date.UTC(2015,5,26),title:"F",text:"Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally "},{x:Date.UTC(2015,5,29),title:"G",text:"Euro records stunning reversal against dollar"},{x:Date.UTC(2015,5,30),title:"H",text:"Surging US dollar curbs global IT spend"}],onSeries:"dataseries",shape:"circlepin",width:16}]})})});
$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?",function(e){$("#container2").highcharts("StockChart",{rangeSelector:{selected:0},title:{text:"Analyse"},tooltip:{style:{width:"200px"},valueDecimals:4,shared:!0},yAxis:{title:{text:"Exchange rate"}},series:[{name:"USD to EUR",data:e,id:"dataseries"},{type:"flags",data:[{x:Date.UTC(2015,5,8),title:"C",text:"Stocks fall on Greece, rate concerns; US dollar dips"},{x:Date.UTC(2015,5,12),title:"D",text:"Zimbabwe ditches 'worthless' currency for the US dollar "},{x:Date.UTC(2015,5,19),title:"E",text:"US Dollar Declines Over the Week on Rate Timeline"},{x:Date.UTC(2015,5,26),title:"F",text:"Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally "},{x:Date.UTC(2015,5,29),title:"G",text:"Euro records stunning reversal against dollar"},{x:Date.UTC(2015,5,30),title:"H",text:"Surging US dollar curbs global IT spend"}],onSeries:"dataseries",shape:"circlepin",width:16}]})})});
$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?",function(e){$("#container3").highcharts("StockChart",{rangeSelector:{selected:0},title:{text:"Analyse"},tooltip:{style:{width:"200px"},valueDecimals:4,shared:!0},yAxis:{title:{text:"Exchange rate"}},series:[{name:"USD to EUR",data:e,id:"dataseries"},{type:"flags",data:[{x:Date.UTC(2015,5,8),title:"C",text:"Stocks fall on Greece, rate concerns; US dollar dips"},{x:Date.UTC(2015,5,12),title:"D",text:"Zimbabwe ditches 'worthless' currency for the US dollar "},{x:Date.UTC(2015,5,19),title:"E",text:"US Dollar Declines Over the Week on Rate Timeline"},{x:Date.UTC(2015,5,26),title:"F",text:"Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally "},{x:Date.UTC(2015,5,29),title:"G",text:"Euro records stunning reversal against dollar"},{x:Date.UTC(2015,5,30),title:"H",text:"Surging US dollar curbs global IT spend"}],onSeries:"dataseries",shape:"circlepin",width:16}]})})});
$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?",function(e){$("#container4").highcharts("StockChart",{rangeSelector:{selected:0},title:{text:"Analyse"},tooltip:{style:{width:"200px"},valueDecimals:4,shared:!0},yAxis:{title:{text:"Exchange rate"}},series:[{name:"USD to EUR",data:e,id:"dataseries"},{type:"flags",data:[{x:Date.UTC(2015,5,8),title:"C",text:"Stocks fall on Greece, rate concerns; US dollar dips"},{x:Date.UTC(2015,5,12),title:"D",text:"Zimbabwe ditches 'worthless' currency for the US dollar "},{x:Date.UTC(2015,5,19),title:"E",text:"US Dollar Declines Over the Week on Rate Timeline"},{x:Date.UTC(2015,5,26),title:"F",text:"Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally "},{x:Date.UTC(2015,5,29),title:"G",text:"Euro records stunning reversal against dollar"},{x:Date.UTC(2015,5,30),title:"H",text:"Surging US dollar curbs global IT spend"}],onSeries:"dataseries",shape:"circlepin",width:16}]})})});

})

.controller('OpportunityNewCtrl', function($scope, SocketService, Opportunities, $location) {
  analytics.page($location.url());
});
