'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:FacilityCtrl
 * @description
 * # FacilityCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
	.controller('FacilityCtrl', ["$scope", "$rootScope", "WebService", "$location", function ($scope, $rootscope, webservice, $location) {

		$scope.isServerError = true;
		$scope.validateToken = function(){
			webservice.getService($rootscope.baseURL + "Person?token=" + $rootscope.authToken,
				function(retData){
					alert("retData : " + retData);
					if (retData != 1) {
						alert("Token Valied. Stay in same page. " + retData);
					}else{
						$scope.isServerError = false;
						$scope.warningMessage = "Session expired. Please login again.";
						$("#facilityModal").modal('show');
					}
					
				},
				function(errData){
					$scope.isServerError = true;
					$scope.warningMessage = "An error occured. Please try again later";
					$("#facilityModal").modal('show');
				}
			);
		};

		$("#facilityModal").on("hidden.bs.modal", function(){

			if (!$scope.isServerError) {
				$rootscope.authToken = $rootscope.loginName = $rootscope.displayName = "";
				$location.path("/login");
			};

		});

}]);
