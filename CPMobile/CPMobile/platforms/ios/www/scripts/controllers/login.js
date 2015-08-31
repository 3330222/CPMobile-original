'use strict';

/**
 * @ngdoc function
 * @name condoPortalAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the condoPortalAppApp
 */

angular.module('condoPortalAppApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', 'WebService', '$location', function ($rootscope, $scope, webservice, $location) {

    $rootscope.baseURL = "http://192.168.201.23:8005/WebApi/api/";
    $rootscope.isLoginPage = true;
    $scope.userId = $scope.password = "";


    function onDeviceReady(){

        $rootscope.cameraOptions = {
            quality : 50,
            destinationType : Camera.DestinationType.FILE_URI,
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        }
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

    // View Actions

    $scope.login = function () {

      if ($scope.userId.length > 0 && $scope.password.length > 0) {

        webservice.getService($rootscope.baseURL + "Person?loginName=" + $scope.userId + "&password=" + $scope.password,
          function(returnData){
            if(returnData.ResultCode != 1){
              $scope.userId = $scope.password = "";
              $rootscope.authToken = returnData.AuthToken;
              $rootscope.loginName = returnData.LoginName;
              $rootscope.displayName = returnData.DisplayName;
              $location.path('/main');
            }else{
              $scope.errorMessage = returnData.Message;
              $(".modal-content").removeClass("panel-warning").addClass("panel-danger");
                $("#loginModal").modal("show");
            }
            
          }, 
          function(errorData){
            $(".modal-content").removeClass("panel-warning").addClass("panel-danger");
            $scope.errorMessage = "User authentication faile. Please try after some time";
            $("#loginModal").modal("show");
          }
        );
      }else{
        $(".modal-content").removeClass("panel-danger").addClass("panel-warning");
        $scope.errorMessage = "Please keyin both User ID & Password.";
        $("#loginModal").modal("show");
      }

    }

  }]);
