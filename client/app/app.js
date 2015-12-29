'use strict';
angular.module('nodeYoamanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize', 
  'ui.router'
])
  .config(function($stateProvider,$urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/login'); 

    $stateProvider.state("login",{
      "url":'/login',
      "templateUrl" : "/app/login/login.html",
      "controller":"loginCtrl"
    }).state("home",{
      "url":"/home/:id",
      "templateUrl":"/app/home/home.html",
      "controller":"homeCtrl"
    }).state("addUser",{
      "url":"/addUser",
      "templateUrl":"/app/addUser/addUser.html",
      "controller":"addUserCtrl"
    }).state("checkout",{
      "url":"/checkout/:id",
      "templateUrl":"/app/checkout/checkout.html",
      "controller":"checkoutCtrl"
    });  

    $locationProvider.html5Mode(true);
  });