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

});
