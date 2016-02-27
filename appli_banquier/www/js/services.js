angular.module('starter.services', [])

.factory('Clients', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    fullName: 'Ben Sparrow',
    lastText: 'You on your way?',
    phoneNumber: '+33 7 69 69 42 42',
    profileType: 'dynamique',
    face: 'img/ben.png'
  }, {
    id: 1,
    fullName: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    phoneNumber: '+33 7 69 69 42 42',
    profileType: 'dynamique',
    face: 'img/max.png'
  }, {
    id: 2,
    fullName: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    phoneNumber: '+33 7 69 69 41 42',
    profileType: 'dynamique',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    fullName: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    phoneNumber: '+33 7 69 69 42 42',
    profileType: 'dynamique',
    face: 'img/perry.png'
  }, {
    id: 4,
    fullName: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    phoneNumber: '+33 7 69 69 42 42',
    profileType: 'equilibre',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
 })

.factory('Opportunities', function() {
  var opportunities = [{
    id: 0,
  }, {
    id: 1,
  }, {
    id: 2,
  }, {
    id: 3,
  }, {
    id: 4,
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
 })

.factory('SocketService', function (socketFactory) {
  var socket = io.connect('http://192.168.43.70:3000');
  return socket;
})


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

  return Dservice;
});
