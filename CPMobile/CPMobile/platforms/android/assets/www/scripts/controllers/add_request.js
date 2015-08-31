'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AddRequestCtrl
 * @description
 * # AddRequestCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('AddRequestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".addrequest-ServiceTypeItems li a").click(function(){
    	var selectedItem = $(this).text();
  	  	$(".addrequest-ServiceType").find('.selection').text(selectedItem).val(selectedItem);
  	});

  });
