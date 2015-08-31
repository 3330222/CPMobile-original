'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the condoPortalAppApp
 */
angular.module('condoPortalAppApp')
  	.controller('MainCtrl', ['$rootScope', '$scope', 'MainService', 'WebService', '$location', function ($rootscope, $scope, MainService, webservice, $location) {

	    $rootscope.isLoginPage = false;
	    $scope.mainPageIcons = MainService.getInitialData();

	    $rootscope.logout = function(token){

	    	webservice.deleteService($rootscope.baseURL + "Person?token=" + token, 
	    		function(retData){
	    			$rootscope.authToken = $rootscope.loginName = $rootscope.displayName = "";
	    			$location.path("/login");

	    		}, function(errorData){
	    			alert('Faile : ' + errorData);
	    		}
	    	);
	    }

}]);
