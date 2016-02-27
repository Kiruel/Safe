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

  // function readTextFile(file)
  // {
  //   var rawFile = new XMLHttpRequest();
  //   rawFile.open("GET", file, true);
  //   rawFile.onreadystatechange = function ()
  //   {
  //       if(rawFile.readyState === 4)
  //       {
  //           if(rawFile.status === 200 || rawFile.status == 0)
  //           {
  //               var allText = rawFile.responseText;
  //               alert(allText);
  //           }
  //       }
  //   }
  //   rawFile.send(null);
  // }

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

  return Dservice;
});
