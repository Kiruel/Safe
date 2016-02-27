angular.module('DataService', [])
.factory('Dservice', function(){

  var Dservice = {};

  Dservice.getClientsTable = function () {
    console.log("GetClientTable");
  }

  /*Require: ClientId
    Give: Account_id */
  Dservice.getAccountsTable = function (clientId) {

  }
  /*Require Account_id */
  Dservice.getAccountTREvolution = function (accountId) {

  }
  /*Require Account_id */
  Dservice.getAccountAnalytics = function (accountId) {

  }

  /*Require: Account_id
  Give: ISIN */
  Dservice.getAccountTRComposition = function (accountId) {

  }
  /* Require ISIN */
  Dservice.getProdutcsTable = function (ISIN) {

  }
  /* Require ISIN */
  Dservice.getProdutcsTableRE = function (ISIN) {

  }
  /* Require ISIN */
  Dservice.getProdutcsTableAnalyctics = function (ISIN) {

  }
  return Dservice;

});
