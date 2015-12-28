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
      "url":"/home",
      "templateUrl":"/app/home/home.html",
      "controller":"homeCtrl"
    }).state("addUser",{
      "url":"/addUser",
      "templateUrl":"/app/addUser/addUser.html",
      "controller":"addUserCtrl"
    });  

    $locationProvider.html5Mode(true);
  });