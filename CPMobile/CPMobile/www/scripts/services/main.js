angular.module('condoPortalAppApp')
  .service('MainService', function (){
      var JSONObj = [
        [
          {
            "icon" : "icon-ads",
            "label" : "Classified Ads",
            "view" : "ads"
          },
          {
            "icon" : "icon-contacts",
            "label" : "Useful Contacts",
            "view" : "contacts"
          },
          {
            "icon" : "icon-facility",
            "label" : "Facility Booking",
            "view" : "facility"
          }
        ],
        [
          {
            "icon" : "icon-feedback",
            "label" : "Feedback",
            "view" : "feedback"
          },
          {
            "icon" : "icon-help",
            "label" : "Help",
            "view" : "help"
          },
          {
            "icon" : "icon-lostfound",
            "label" : "Lost & Found",
            "view" : "lostfound"
          }
        ],
        [
          {
            "icon" : "icon-news",
            "label" : "News & Notices",
            "view" : "news"
          },
          {
            "icon" : "icon-profile",
            "label" : "My Profile",
            "view" : "profile"
          },
          {
            "icon" : "icon-request",
            "label" : "Service Request",
            "view" : "request"
          }
        ]
      ];

      this.getInitialData = function (){
        return JSONObj;
      };
  }
);