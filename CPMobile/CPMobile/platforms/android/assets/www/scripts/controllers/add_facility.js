'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:AddFacilityCtrl
 * @description
 * # AddFacilityCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  .controller('AddFacilityCtrl', function ($scope) {

    var dateObj = new Date();
    $scope.currMonth = dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1)

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".addFacility-FacilityItems li a").click(function(){
        $(this).parents(".addFacility-Facility").find('.selection').text($(this).text());
        $(this).parents(".addFacility-FacilityItems").find('.selection').val($(this).text());
    });

    $(".responsive-calendar").responsiveCalendar({
          time: $scope.currMonth,
          onDayClick: function(currDate1) {
            // Do something...
          }
    });

  });
