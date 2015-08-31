'use strict';

/**
 * @ngdoc overview
 * @name condoPortalAppApp
 * @description
 * # condoPortalAppApp
 *
 * Main module of the application.
 */
angular
  .module('condoPortalAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ads', {
        templateUrl: 'views/ads.html',
        controller: 'AdsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/facility', {
        templateUrl: 'views/facility.html',
        controller: 'FacilityCtrl'
      })
      .when('/feedback', {
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/lostfound', {
        templateUrl: 'views/lostfound.html',
        controller: 'LostfoundCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/request', {
        templateUrl: 'views/request.html',
        controller: 'RequestCtrl'
      })
      .when('/add_facility', {
        templateUrl: 'views/add_facility.html',
        controller: 'AddFacilityCtrl'
      })
      .when('/facility_form', {
        templateUrl: 'views/facility_form.html',
        controller: 'FacilityFormCtrl'
      })
      .when('/add_request', {
        templateUrl: 'views/add_request.html',
        controller: 'AddRequestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
