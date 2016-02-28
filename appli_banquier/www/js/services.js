angular.module('starter.services', [])

.factory('Clients', function(Dservice, lodash) {
  // Might use a resource here that returns a JSON array
    var clients = [{"id":"1","nom":"Bacard","prenom":"Hugo","sexe":"H","dateDeNaissance":"14/09/1971","actif_retraite":"Actif","profession":" Boucher ","entreprise":"BarbaqueArt","enfants":" 3   ","regions":"Auvergne","profile_de_risque":"equilibre","date_entree_relation":"23/08/2013","fullName":"Hugo Bacard"},{"id":"2","nom":"Baker","prenom":"Mathieu","sexe":"H","dateDeNaissance":"09/11/1981","actif_retraite":"Actif","profession":"Boulanger","entreprise":"Simon si bon","enfants":" 1   ","regions":"Bretagne","profile_de_risque":"equilibre","date_entree_relation":"06/06/2014","fullName":"Mathieu Baker"},{"id":"3","nom":"Belair","prenom":"Luc","sexe":"H","dateDeNaissance":"22/03/1964","actif_retraite":"Actif","profession":"PDG","entreprise":"GDP","enfants":" 3   ","regions":"Picardie","profile_de_risque":"dynamique","date_entree_relation":"08/03/2011","fullName":"Luc Belair"},{"id":"4","nom":"Bouscaren","prenom":"Elisabeth","sexe":"F","dateDeNaissance":"12/08/1956","actif_retraite":"Inactif","profession":"M�re au foyer","entreprise":"-","enfants":" 1   ","regions":"Bourgogne","profile_de_risque":"defensif","date_entree_relation":"01/08/2014","fullName":"Elisabeth Bouscaren"},{"id":"5","nom":"Ceballos","prenom":"Cesar","sexe":"H","dateDeNaissance":"22/06/1952","actif_retraite":"Retrait�","profession":"Docteur","entreprise":"Hopital","enfants":" 1   ","regions":"Aquitaine","profile_de_risque":"equilibre","date_entree_relation":"11/03/2014","fullName":"Cesar Ceballos"},{"id":"6","nom":"Disegni","prenom":"Danielle","sexe":"F","dateDeNaissance":"13/07/1976","actif_retraite":"Actif","profession":"Avocate","entreprise":"D�sign�","enfants":" 1   ","regions":"Basse-Normandie","profile_de_risque":"defensif","date_entree_relation":"12/01/2012","fullName":"Danielle Disegni"},{"id":"7","nom":"Dospinescu","prenom":"Gabrielle","sexe":"F","dateDeNaissance":"15/08/1986","actif_retraite":"Actif","profession":"Stagiaire IT","entreprise":"43 Entrepreneurs","enfants":" 2   ","regions":"Picardie","profile_de_risque":"defensif","date_entree_relation":"18/12/2012","fullName":"Gabrielle Dospinescu"},{"id":"8","nom":"Favre","prenom":"Charles","sexe":"H","dateDeNaissance":"02/02/1967","actif_retraite":"Inactif","profession":"Rentier","entreprise":"-","enfants":" -     ","regions":"Poitou-Charentes","profile_de_risque":"dynamique","date_entree_relation":"01/02/2013","fullName":"Charles Favre"},{"id":"9","nom":"Brugalle","prenom":"Michel","sexe":"H","dateDeNaissance":"06/11/1949","actif_retraite":"Retrait�","profession":"S�nateur","entreprise":"France","enfants":" -     ","regions":"Rh�ne-Alpes","profile_de_risque":"equilibre","date_entree_relation":"01/07/2013","fullName":"Michel Brugalle"},{"id":"10","nom":"Nisse","prenom":"Olivia","sexe":"F","dateDeNaissance":"24/02/1953","actif_retraite":"Retrait�","profession":"Accessoiriste","entreprise":"MyShow","enfants":" 3   ","regions":"Auvergne","profile_de_risque":"defensif","date_entree_relation":"10/09/2013","fullName":"Olivia Nisse"},{"id":"11","nom":"Herblot","prenom":"Richard","sexe":"H","dateDeNaissance":"06/06/1974","actif_retraite":"Actif","profession":"Organisateur de voyage","entreprise":"SiliconValleyTour","enfants":" 3   ","regions":"Centre-Val de Loire","profile_de_risque":"equilibre","date_entree_relation":"19/10/2012","fullName":"Richard Herblot"},{"id":"12","nom":"Gubler","prenom":"Paul","sexe":"H","dateDeNaissance":"08/01/1970","actif_retraite":"Actif","profession":"Gyn�cologue","entreprise":"Hopital","enfants":" 1   ","regions":"Aquitaine","profile_de_risque":"equilibre","date_entree_relation":"15/04/2013","fullName":"Paul Gubler"},{"id":"13","nom":"Merle","prenom":"Michel","sexe":"H","dateDeNaissance":"13/08/1966","actif_retraite":"Actif","profession":"Com�dien","entreprise":"Plus folle la vie","enfants":" -     ","regions":"Provence-Alpes-C�te d'Azur","profile_de_risque":"dynamique","date_entree_relation":"03/01/2012","fullName":"Michel Merle"},{"id":"14","nom":"Payne","prenom":"Olivier","sexe":"H","dateDeNaissance":"06/11/1957","actif_retraite":"Inactif","profession":"Actuaire","entreprise":"Sog�cap","enfants":" -     ","regions":"�le-de-France","profile_de_risque":"defensif","date_entree_relation":"03/09/2014","fullName":"Olivier Payne"},{"id":"15","nom":"Plenat","prenom":"St�phanie","sexe":"F","dateDeNaissance":"24/12/1946","actif_retraite":"Retrait�","profession":"Affr�teur","entreprise":"SNCM","enfants":" 2   ","regions":"�le-de-France","profile_de_risque":"defensif","date_entree_relation":"15/03/2013","fullName":"St�phanie Plenat"},{"id":"16","nom":"Raibaut","prenom":"Christelle","sexe":"F","dateDeNaissance":"15/06/1980","actif_retraite":"Inactif","profession":"Courtier en assurance","entreprise":"Primo","enfants":" 3   ","regions":"Bretagne","profile_de_risque":"dynamique","date_entree_relation":"25/04/2014","fullName":"Christelle Raibaut"},{"id":"17","nom":"Schmidt","prenom":"Patricia","sexe":"F","dateDeNaissance":"02/10/1955","actif_retraite":"Retrait�","profession":"Cuisiniste","entreprise":"Cuisinello","enfants":" -     ","regions":"�le-de-France","profile_de_risque":"dynamique","date_entree_relation":"15/09/2014","fullName":"Patricia Schmidt"},{"id":"18","nom":"Teissier","prenom":"C�cile","sexe":"F","dateDeNaissance":"25/10/1965","actif_retraite":"Actif","profession":"Hacker","entreprise":"PimpMyPC","enfants":" -     ","regions":"Lorraine","profile_de_risque":"defensif","date_entree_relation":"12/08/2014","fullName":"C�cile Teissier"},{"id":"19","nom":"Vezzani","prenom":"Julien","sexe":"H","dateDeNaissance":"01/05/1981","actif_retraite":"Actif","profession":"Ing�nieur r�seau","entreprise":"","enfants":" -     ","regions":"Basse-Normandie","profile_de_risque":"equilibre","date_entree_relation":"19/06/2014","fullName":"Julien Vezzani"},{"id":"20","nom":"Tepper","prenom":"St�phane","sexe":"H","dateDeNaissance":"23/02/1967","actif_retraite":"Actif","profession":"Directeur de transport","entreprise":"DHLille","enfants":" 2   ","regions":"Nord-Pas-de-Calais","profile_de_risque":"dynamique","date_entree_relation":"28/01/2011","fullName":"St�phane Tepper"},{"id":"21","nom":"Alvarez","prenom":"Cynthia","sexe":"F","dateDeNaissance":"08/04/1966","actif_retraite":"Actif","profession":"Agent immobilier","entreprise":"Guy Moquet","enfants":" -     ","regions":"Franche-Comt�","profile_de_risque":"equilibre","date_entree_relation":"04/02/2011","fullName":"Cynthia Alvarez"},{"id":"22","nom":"Baillet","prenom":"Florence","sexe":"F","dateDeNaissance":"09/06/1948","actif_retraite":"Retrait�","profession":"Detective priv�","entreprise":"Florence Secrets","enfants":" -     ","regions":"�le-de-France","profile_de_risque":"dynamique","date_entree_relation":"16/03/2012","fullName":"Florence Baillet"},{"id":"23","nom":"Bertrand","prenom":"Alice","sexe":"F","dateDeNaissance":"17/10/1960","actif_retraite":"Actif","profession":"Psychologue","entreprise":"-","enfants":" -     ","regions":"Nord-Pas-de-Calais","profile_de_risque":"dynamique","date_entree_relation":"17/03/2011","fullName":"Alice Bertrand"},{"id":"24","nom":"Jossic","prenom":"Etienne","sexe":"H","dateDeNaissance":"21/09/1968","actif_retraite":"Actif","profession":"Comptable","entreprise":"OL Group","enfants":" 2   ","regions":"Alsace","profile_de_risque":"defensif","date_entree_relation":"26/08/2013","fullName":"Etienne Jossic"},{"id":"25","nom":"Lacas","prenom":"Bruno","sexe":"H","dateDeNaissance":"02/06/1966","actif_retraite":"Actif","profession":"Analyste financier","entreprise":"Bloomberg","enfants":" 2   ","regions":"Aquitaine","profile_de_risque":"defensif","date_entree_relation":"14/02/2013","fullName":"Bruno Lacas"},{"id":"26","nom":"Lemaire","prenom":"Alain","sexe":"H","dateDeNaissance":"22/11/1959","actif_retraite":"Inactif","profession":"Directeur","entreprise":"Total","enfants":" 1   ","regions":"Auvergne","profile_de_risque":"equilibre","date_entree_relation":"06/08/2012","fullName":"Alain Lemaire"},{"id":"27","nom":"Legeron","prenom":"Hugues","sexe":"H","dateDeNaissance":"26/12/1962","actif_retraite":"Actif","profession":"Anesth�siste","entreprise":"-","enfants":" 3   ","regions":"Nord-Pas-de-Calais","profile_de_risque":"dynamique","date_entree_relation":"15/01/2014","fullName":"Hugues Legeron"},{"id":"28","nom":"Mansard","prenom":"Fran�oise","sexe":"F","dateDeNaissance":"08/11/1961","actif_retraite":"Actif","profession":"Dentiste","entreprise":"-","enfants":" -     ","regions":"Picardie","profile_de_risque":"dynamique","date_entree_relation":"16/10/2014","fullName":"Fran�oise Mansard"},{"id":"29","nom":"Brachet","prenom":"Val�rie","sexe":"F","dateDeNaissance":"21/09/1980","actif_retraite":"Actif","profession":"Architecte","entreprise":"Domido","enfants":" 1   ","regions":"Bourgogne","profile_de_risque":"defensif","date_entree_relation":"12/06/2015","fullName":"Val�rie Brachet"},{"id":"30","nom":"Creusot","prenom":"Thomas","sexe":"H","dateDeNaissance":"23/05/1984","actif_retraite":"Actif","profession":"Responsable atelier","entreprise":"ManuFrance","enfants":" 2   ","regions":"Nord-Pas-de-Calais","profile_de_risque":"equilibre","date_entree_relation":"27/05/2014","fullName":"Thomas Creusot"},{"id":"31","nom":"Gaspard","prenom":"V�ronique","sexe":"F","dateDeNaissance":"19/06/1963","actif_retraite":"Inactif","profession":"Agent secret","entreprise":"KGB","enfants":" -     ","regions":"Nord-Pas-de-Calais","profile_de_risque":"defensif","date_entree_relation":"13/09/2013","fullName":"V�ronique Gaspard"},{"id":"32","nom":"Ruelley","prenom":"Florent","sexe":"H","dateDeNaissance":"19/12/1970","actif_retraite":"Actif","profession":"Horloger","entreprise":"Timey","enfants":" 2   ","regions":"Rh�ne-Alpes","profile_de_risque":"dynamique","date_entree_relation":"13/10/2014","fullName":"Florent Ruelley"},{"id":"33","nom":"Vallee","prenom":"Anne","sexe":"F","dateDeNaissance":"16/06/1980","actif_retraite":"Actif","profession":"Huissier","entreprise":"-","enfants":" 1   ","regions":"�le-de-France","profile_de_risque":"equilibre","date_entree_relation":"13/05/2013","fullName":"Anne Vallee"},{"id":"34","nom":"Benton","prenom":"Nicolas","sexe":"H","dateDeNaissance":"08/11/1959","actif_retraite":"Inactif","profession":"Conseiller fun�raire","entreprise":"-","enfants":" 1   ","regions":"Languedoc-Roussillon","profile_de_risque":"defensif","date_entree_relation":"11/04/2014","fullName":"Nicolas Benton"},{"id":"35","nom":"Dean","prenom":"Dominique","sexe":"H","dateDeNaissance":"23/01/1955","actif_retraite":"Retrait�","profession":"Arch�ologue","entreprise":"-","enfants":" 3   ","regions":"Provence-Alpes-C�te d'Azur","profile_de_risque":"equilibre","date_entree_relation":"17/08/2012","fullName":"Dominique Dean"},{"id":"36","nom":"Heflin","prenom":"Sophie","sexe":"F","dateDeNaissance":"07/06/1971","actif_retraite":"Actif","profession":"Conseiller","entreprise":"Nikos is back","enfants":" 3   ","regions":"Auvergne","profile_de_risque":"defensif","date_entree_relation":"10/06/2011","fullName":"Sophie Heflin"},{"id":"37","nom":"Laguerre","prenom":"H�l�ne","sexe":"F","dateDeNaissance":"01/08/1976","actif_retraite":"Actif","profession":"Responsable d'agence","entreprise":"Soci�t� G�n�rale","enfants":" 1   ","regions":"Champagne-Ardenne","profile_de_risque":"defensif","date_entree_relation":"04/02/2015","fullName":"H�l�ne Laguerre"},{"id":"38","nom":"Audry","prenom":"Fran�ois","sexe":"H","dateDeNaissance":"17/09/1981","actif_retraite":"Actif","profession":"Pigiste","entreprise":"Le canneton enchain�","enfants":" -     ","regions":"Rh�ne-Alpes","profile_de_risque":"defensif","date_entree_relation":"07/09/2011","fullName":"Fran�ois Audry"},{"id":"39","nom":"Bickel","prenom":"Cyril","sexe":"H","dateDeNaissance":"03/01/1967","actif_retraite":"Actif","profession":"Sommelier","entreprise":"-","enfants":" 1   ","regions":"Champagne-Ardenne","profile_de_risque":"defensif","date_entree_relation":"14/11/2014","fullName":"Cyril Bickel"},{"id":"40","nom":"Caron","prenom":"Jonathan","sexe":"H","dateDeNaissance":"11/12/1951","actif_retraite":"Retrait�","profession":"Armurier","entreprise":"Dynamite cors�e","enfants":" 1   ","regions":"Provence-Alpes-C�te d'Azur","profile_de_risque":"dynamique","date_entree_relation":"24/08/2012","fullName":"Jonathan Caron"},{"id":"41","nom":"Langer","prenom":"Christophe","sexe":"H","dateDeNaissance":"24/02/1969","actif_retraite":"Actif","profession":"Pilote","entreprise":"Terre du milieu","enfants":" 1   ","regions":"Languedoc-Roussillon","profile_de_risque":"equilibre","date_entree_relation":"06/02/2014","fullName":"Christophe Langer"},{"id":"42","nom":"Lorrain","prenom":"Sophie","sexe":"F","dateDeNaissance":"23/06/1973","actif_retraite":"Inactif","profession":"Responsable de communication","entreprise":"Free","enfants":" -     ","regions":"Haute-Normandie","profile_de_risque":"equilibre","date_entree_relation":"22/03/2012","fullName":"Sophie Lorrain"},{"id":"43","nom":"Mellane","prenom":"Anthony","sexe":"H","dateDeNaissance":"27/03/1984","actif_retraite":"Actif","profession":"","entreprise":"","enfants":" 1   ","regions":"Aquitaine","profile_de_risque":"defensif","date_entree_relation":"13/09/2011","fullName":"Anthony Mellane"}];
  return {
    all: function() {
      return clients;
    },
    remove: function(client) {
      clients.splice(s.indexOf(client), 1);
    },
    get: function(id) {
      return lodash.find(clients, function(client) {
        return client.id == id;
      });
    }
  };
 })

.factory('Notifications', function(lodash) {
  var notifications = [
  {
    id: 0,
    title: 'Test',
    informations: '<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Integer vel egestas ante. Suspendisse aliquam libero eu enim maximus iaculis. Aliquam auctor urna a tortor sollicitudin aliquet. Sed at ipsum sapien. Integer consectetur maximus nisl at convallis. Proin vitae mauris sodales, sollicitudin sapien et, mollis orci. Praesent hendrerit eu mi in tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mi ex, tristique nec sem ut, imperdiet mattis lectus. Suspendisse nec maximus nulla, <b>faucibus rhoncus</b> enim. Mauris non bibendum lacus, vitae luctus nunc. Duis mollis pulvinar odio, nec efficitur sapien tincidunt ac. Curabitur eu elementum tortor, placerat tristique mauris. Sed sed libero in velit lobortis commodo nec at felis. Curabitur ultrices erat sit amet <b>ligula</b> vulputate, ac consectetur nisi sollicitudin. Cras vel orci <b>imperdiet</b>, pretium massa nec, dapibus risus.',
    clientFullName: 'test client'
  }
];

  return {
    all: function() {
      return notifications;
    },
    remove: function(notification) {
      notifications.splice(notifications.indexOf(notification), 1);
    },
    get: function(id) {
      return lodash.find(notifications, function(notification) {
        return notification.id == id;
      });
    },
    push: function(notif) {
      notifications.push(notif);
    },
    append: function(notif) {
      notifications = [notif].concat(notifications);
      console.log(notifications);
    }
  };
 })

.factory('Opportunities', function(lodash) {
  var opportunities = [
  {
    id: 0,
    type: 'Assurance vie',
    duration: 'Long terme', // between 1, 2, 3
    projection: {
      duration: 4.5 // years
    },
    analysis: '<b>A:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet lacus sit amet mauris dapibus, id sodales lectus posuere. Nam molestie turpis quis arcu impe sed. Proin nibhsce id tempor sapien. <br><br> <b>B:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet lacus sit amet mauris dapibus, id lestie turpis quis arcu imperdiet tempor. Nam fermentumllentesque malesuada, diam neque lacinia quam, vitae lacinia mi sapien quis leo. Fusce id tempor sapien. <br><br>erdiet tempor. Nam magna velit, accumsan sed tempor sed, convallis non diam.  Duis viverra, leo et pellentesque malesuada, diam neque lacinia quam, vitae lacinia mi sapien quis leo. Fusce id tempor sapien. <br><br>',
    sent: true
  },
  {
    id: 1,
    type: 'Compte titre',
    duration: 'Court terme', // between 1, 2, 3
    projection: {
      duration: 4.5 // years
    },
    analysis: '<b>A:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet lacus sit amet mauripit erat ut volutpat. Duis viverra, leo et pellentesque malesuads leo. Fusce id tempor sapien. <br><br><b>C: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet lacus sit amet mauris dapibus, id  placerat. Fusce ullamcorper justo vitae nisi pellentesque eleifend. Morbi et neque vel tvitae lacinia mi sapien quis leo. Fusce id tempor sapien. <br><br><b>E:</b> Lorem ipsum dolor sit am',
    sent: false
  }
];

  return {
    all: function() {
      return opportunities;
    },
    remove: function(opportunity) {
      opportunities.splice(opportunities.indexOf(opportunity), 1);
    },
    get: function(id) {
      return lodah.find(opportunities, function(opportunity) {
        return opportunity.id == id;
      });
    },
    push: function(notif) {
      opportunities.push(notif);
    },
    append: function(notif) {
    opportunities = [notif].concat(opportunities)
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
    $http.get('/data/ClientsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }

  /*Require: ClientId
    Give: Account_id */
  Dservice.getAccountsTable = function (cb) {
    $http.get('data/AccountsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /*Require Account_id */
  Dservice.getAccountTREvolution = function (cb) {
    $http.get('data/AccountTrackRecordEvolution.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /*Require Account_id */
  Dservice.getAccountAnalytics = function (cb) {
    $http.get('data/AccountAnalytics.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }

  /*Require: Account_id
  Give: ISIN */
  Dservice.getAccountTRComposition = function (cb) {
    $http.get('data/AccountTrackRecordCompositionAmounts.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsTable = function (cb) {
    $http.get('data/ProductsTable.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsTableRE = function (cb) {
    $http.get('data/ProductTrackRecordEvolution.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }
  /* Require ISIN */
  Dservice.getProdutcsAnalyctics = function (cb) {
    $http.get('data/ProductAnalytics.csv')
    .success(function (data) {
      cb(CSVToArray(data, ';'));
    });
  }

  return Dservice;
});
