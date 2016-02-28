angular.module('starter.controllers', [])

.controller('NotificationsCtrl', function($scope, Notifications, SocketService) {

  $scope.notifications = Notifications.all();

  setInterval(function() {
    $scope.notifications = Notifications.all();
  }, 200);

  SocketService.on('accept_from_client', function(msg) {
    Notifications.append(msg);
  });

  $scope.removeNotification = function(notification) {
    Notifications.remove(notification);
  };

})

.controller('NotificationDetailCtrl', function($scope, $stateParams, Notifications) {
  $scope.notification = Notifications.get($stateParams.notificationId);
})
.controller('ProfileDetailCtrl', function($scope, $stateParams, Clients) {
  $scope.client = Clients.get($stateParams.profileId);
})

.controller('ProfilesCtrl', function($scope, Clients, Dservice, lodash) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.clients = Clients.all();
})

.controller('ProfileDetailCtrl', function($scope, $stateParams, Clients) {
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

.controller('OpportunitiesCtrl', function($scope, SocketService, Opportunities) {

  $scope.opportunities = Opportunities.all();
  SocketService.on('message', function(msg){
  });

  $scope.discardOpportunity = function(opportunity) {
    Opportunities.remove(opportunity);
  }

  $scope.sendOpportunity = function(opportunity) {
    SocketService.emit('push_from_banker', opportunity);
    opportunity.sent = true;
  }

})

.controller('OpportunityNewCtrl', function($scope, SocketService, Opportunities) {
});
