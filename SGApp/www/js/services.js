angular.module('DataService', [])
.factory('Dservice', function($http){

  var Dservice = {};

  function CSVToArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );
    var arrData = [[]];
    var arrMatches = null;

    while (arrMatches = objPattern.exec( strData )){
        var strMatchedDelimiter = arrMatches[ 1 ];
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){
            arrData.push( [] );
        }
        var strMatchedValue;
        if (arrMatches[ 2 ]){
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );
        } else
            strMatchedValue = arrMatches[ 3 ];
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    return( arrData );
  }

  Dservice.getClientsTable = function (cb) {
    $http.get('DataSources/Data/ClientsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }

  /*Require: ClientId
    Give: Account_id */
  Dservice.getAccountsTable = function (cb) {
    $http.get('DataSources/Data/AccountsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /*Require Account_id */
  Dservice.getAccountTREvolution = function (cb) {
    $http.get('DataSources/Data/AccountTrackRecordEvolution.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /*Require Account_id */
  Dservice.getAccountAnalytics = function (cb) {
    $http.get('DataSources/Data/AccountAnalytics.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }

  /*Require: Account_id
  Give: ISIN */
  Dservice.getAccountTRComposition = function (cb) {
    $http.get('DataSources/Data/AccountTrackRecordCompositionAmounts.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsTable = function (cb) {
    $http.get('DataSources/Data/ProductsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsTableRE = function (cb) {
    $http.get('DataSources/Data/ProductTrackRecordEvolution.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsAnalyctics = function (cb) {
    $http.get('DataSources/Data/ProductAnalytics.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  Dservice.getClientsTableDetailed = function (cb) {
    $http.get('DataSources/Data/ClientsTableDetailed.csv')
    .success(function (data) {
      cb(CSVToArray(data, ','));
    });
  }
  Dservice.getClientId = function (clientId, cb){

    Dservice.getClientsTableDetailed(function (data) {
      var clients = [{
        id: 0,
        title: data[36][18],
        p_l: parseFloat(data[36][17].replace(/\s/g, "")) - parseFloat(data[36][16].replace(/\s/g, "")),
        perfomance: ((parseFloat(data[36][17].replace(/\s/g, "")) - parseFloat(data[36][16].replace(/\s/g, ""))) / parseFloat(data[36][16].replace(/\s/g, "")) * 100).toFixed(2),
        perfomance_annual: 15.2,
        volatilite: 14.3,
        max_drawdown: -12.81,
        tracking_error: 9.54
      }, {
        id: 1,
        title: data[36][24],
        p_l: parseFloat(data[36][23].replace(/\s/g, "")) - parseFloat(data[36][22].replace(/\s/g, "")),
        perfomance: ((parseFloat(data[36][23].replace(/\s/g, "")) - parseFloat(data[36][22].replace(/\s/g, ""))) / parseFloat(data[36][22].replace(/\s/g, "")) * 100).toFixed(2),
        perfomance_annual: 2.0,
        volatilite: 15.3,
        max_drawdown: -12.81,
        tracking_error: 10.03
      }, {
        id: 2,
        title: data[36][30],
        p_l: parseFloat(data[36][29].replace(/\s/g, "")) - parseFloat(data[36][28].replace(/\s/g, "")),
        perfomance: ((parseFloat(data[36][29].replace(/\s/g, "")) - parseFloat(data[36][28].replace(/\s/g, ""))) / parseFloat(data[36][28].replace(/\s/g, "")) * 100).toFixed(2),
        perfomance_annual: 35.8,
        volatilite: 12.7,
        max_drawdown: -6.14,
        tracking_error: 8.86
      }];

      for (var i = 0; i < clients.length; i++) {
        if (clients[i].id === parseInt(clientId)) {
          cb(clients[i]);
          break ;
        }
      }
    });
    // console.log(clientId);
    // return clientId_return;
  }
  return Dservice;
})
.factory('SocketService', function (socketFactory) {

  var socket = io.connect('http://192.168.43.70:3000');
  return socket;

});
