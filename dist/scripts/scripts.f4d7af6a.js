"use strict";!function(){var a=angular.module("reallygoodemails",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.utils","multi-transclude","angularMoment","headroom","app.services.emailData","app.filters.general","app.directives.general","app.directives.avatar","app.directives.notification"]).run(["$templateCache","$http",function(a,b){b.get("partials/header.html",{cache:a}),b.get("partials/footer.html",{cache:a})}]);a.run(function(){});var b={delay:["$q","$timeout",function(a,b){var c=a.defer();return b(c.resolve,400,!1),c.promise}]};a.config(["$routeProvider","$locationProvider",function(a,c){a.when("/",{templateUrl:"views/home.html",resolve:b,titleTag:"Really Good Emails - The Best Email Designs in the Universe (that came into my inbox)",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/email-details",{templateUrl:"views/email-details.html",resolve:b,titleTag:"{{Email Page Title}} | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/inspiration",{templateUrl:"views/inspiration.html",resolve:b,titleTag:"Email Inspiration | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/interviews",{templateUrl:"views/interviews.html",resolve:b,titleTag:"Email Interviews | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/email-kits",{templateUrl:"views/email-kits.html",resolve:b,titleTag:"Email Kits | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/archive",{templateUrl:"views/archive.html",resolve:b,titleTag:"Email Archive | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/faq",{templateUrl:"views/faq.html",resolve:b,titleTag:"FAQ | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/contact",{templateUrl:"views/contact.html",resolve:b,titleTag:"Contact | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/newsletter",{templateUrl:"views/newsletter.html",resolve:b,titleTag:"Email Newsletter | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/emails/:page",{templateUrl:"views/email-detail.html",resolve:b,titleTag:"",metaTitle:"",metaDesc:""}).when("/collections/:page",{templateUrl:"views/collections.html",resolve:b,titleTag:"",metaTitle:"",metaDesc:""}).when("/brands/:page",{templateUrl:"views/brands.html",resolve:b,titleTag:"",metaTitle:"",metaDesc:""}).when("/tags/:page",{templateUrl:"views/tags.html",resolve:b,titleTag:"",metaTitle:"",metaDesc:""}).when("/test",{templateUrl:"views/test.html",resolve:b,titleTag:"test | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).when("/404",{templateUrl:"views/error.html",resolve:b,titleTag:"Ruh Roh! | Really Good Emails",metaTitle:"the meta title",metaDesc:"the meta description"}).otherwise({redirectTo:"/404"}),c.html5Mode(!0)}]),a.run(["$rootScope","$window","$timeout",function(a,b,c){a.back=function(){b.history.back()},angular.element(b).on("scroll",function(){}),angular.element(b).on("orientationchange",function(){c(function(){a.mobileSideNavClose()})}),angular.element(b).on("resize",function(){c(function(){angular.element("html").hasClass("mobile")||a.mobileSideNavClose()})})}])}(),function(a){var b=a("body");a.mq320="screen and (min-width: 320px)",a.mq480="screen and (min-width: 480px)",a.mq600="screen and (min-width: 600px)",a.mq736="screen and (min-width: 736px)",a.mq768="screen and (min-width: 768px)",a.mq1024="screen and (min-width: 1024px)",a.vmin320={match:function(){b.addClass("mobile vmin320"),b.trigger("vmin_320_true")},unmatch:function(){b.removeClass("vmin320"),b.trigger("vmin_320_false")}},a.vmin480={match:function(){b.addClass("vmin480"),b.trigger("vmin_480_true")},unmatch:function(){b.removeClass("vmin480"),b.trigger("vmin_480_false")}},a.vmin600={match:function(){b.addClass("vmin600"),b.trigger("vmin_600_true")},unmatch:function(){b.removeClass("vmin600"),b.trigger("vmin_600_false")}},a.vmin736={match:function(){b.addClass("vmin736"),b.removeClass("mobile"),b.trigger("vmin_736_true")},unmatch:function(){b.addClass("mobile"),b.removeClass("vmin736"),b.trigger("vmin_736_false")}},a.vmin768={match:function(){b.addClass("vmin768"),b.trigger("vmin_768_true")},unmatch:function(){b.removeClass("vmin768"),b.trigger("vmin_768_false")}},a.vmin1024={match:function(){b.addClass("vmin1024"),b.trigger("vmin_1024_true")},unmatch:function(){b.removeClass("vmin1024"),b.trigger("vmin_1024_false")}},enquire.register(a.mq320,a.vmin320),enquire.register(a.mq480,a.vmin480),enquire.register(a.mq600,a.vmin600),enquire.register(a.mq736,a.vmin736),enquire.register(a.mq768,a.vmin768),enquire.register(a.mq1024,a.vmin1024)}(jQuery),function(){var a=angular.module("reallygoodemails");a.controller("mainCtrl",["$rootScope","$scope","$window","$location","$timeout","$filter","emailData",function(a,b,c,d,e,f,g){a.appName="reallygoodemails",a.appTitle="Really Good Emails",a.appURL="http://reallygoodemails.com",a.currentURL=window.location.href,a.imgPath="/media/images",a.appCDNurl="//reallygoodemails-cdn.appspot.com",g().success(function(a){b.emails=a.emails,b.brands=a.brands,b.collections=a.collections,b.brandCount=b.brands.length,b.collectionCount=b.collections.length,a.emails.map(function(a){var b=f("slugify")(a.brandName),c=f("slugify")(a.subject),d="emails/"+b+"-"+c+"?id="+a.emailID;a.slug=d})}),b.viewCount="metrics[0].views",b.postCount="metrics[0].posts",a.$on("$routeChangeStart",function(b,c){c&&c.$$route&&(a.loaderTrash=!1,a.loaderSpin=!0,a.loader=!0)}),a.$on("$routeChangeSuccess",function(f,g){var h=d.search().id;a.queryID=parseInt(h),a.titleTag=g.$$route.titleTag,a.metaTitle=g.$$route.metaTitle,a.metaDesc=g.$$route.metaDesc,b.page=function(a){return a===d.path()};var i=function(){d.path().indexOf("/emails/")>=0?(angular.element(".container > .theme-slate").removeClass("theme-slate"),a.theme=!1):a.theme=!0};window.scrollTo(0,0),e(function(){a.loader=!1,i()},750),e(function(){a.loaderTrash=!0,a.loaderSpin=!1},1e3),e(function(){a.mobileSideNav=!1},1050),c.ga&&c.ga("send","pageview",{page:d.path()})}),b.activeToggle=function(){b.active=!b.active},a.mobileSideNavToggle=function(){a.mobileSideNav=!a.mobileSideNav},a.mobileSideNavClose=function(){a.mobileSideNav=!1},a.heightAdjust=function(){angular.element($("header"))},b.message={time:new Date}}])}(),function(){var a=angular.module("reallygoodemails");a.controller("cardGridCtrl",["$scope","$timeout","$http","emailData",function(a,b){a.navGroupOneItems=[{title:"Brands"},{title:"Collections"}],a.navGroupOneTitle=a.navGroupOneItems[0].title,a.toggleNavGroupOneItem=function(){angular.element(".nav-group-one").find(".first").removeClass(),angular.element(".nav-group-two").find(".active").removeClass(),angular.element(".nav-group-three").find(".active").removeClass(),a.lastStatus&&(a.lastStatus.status1=""),a.navGroupOneTitle=this.item.title,this.status1="active",a.lastStatus=this,b(function(){a.toggleNavGroupOne=!1},100)},a.navGroupTwoItems=[{title:"My Lists",svg:"icon-list"},{title:"My Favorites",svg:"icon-smiley"}],a.navGroupTwoTitle=a.navGroupTwoItems[0].title,a.toggleNavGroupTwoItem=function(){angular.element(".nav-group-two").find(".first").removeClass(),angular.element(".nav-group-one").find(".active").removeClass(),angular.element(".nav-group-three").find(".active").removeClass(),a.lastStatus&&(a.lastStatus.status2=""),a.navGroupTwoTitle=this.item.title,this.status2="active",a.lastStatus=this,b(function(){a.toggleNavGroupTwo=!1},100)},a.navGroupThreeItems=[{title:"Trending"},{title:"New"},{title:"Popular"}],a.navGroupThreeTitle=a.navGroupThreeItems[0].title,a.toggleNavGroupThreeItem=function(){angular.element(".nav-group-three").find(".first").removeClass(),angular.element(".nav-group-one").find(".active").removeClass(),angular.element(".nav-group-two").find(".active").removeClass(),a.lastStatus&&(a.lastStatus.status3=""),a.navGroupThreeTitle=this.item.title,this.status3="active",a.lastStatus=this,b(function(){a.toggleNavGroupThree=!1},100)}}])}(),angular.module("app.services.emailData",[]).service("emailData",["$http",function(a){var b=null;return function(){return b?b:b=a.get("data/emailData.json")}}]),angular.module("app.filters.general",[]).filter("slugify",function(){return function(a){return a?a.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g,"-").toLowerCase():""}}),angular.module("app.directives.general",[]).directive("ngHeight100",["$window",function(a){return function(b,c){var d=angular.element(a),e=function(){c.css("height",d.height()+75+"px")};d.on("resize",function(){e()}),d.on("orientationchange",function(){e()}),e()}}]).directive("ngMobileClick",[function(){return function(a,b,c){b.bind("touchstart click",function(b){b.preventDefault(),b.stopPropagation(),a.$apply(c.ngMobileClick)})}}]),angular.module("app.directives.avatar",[]).directive("avatar",[function(){return{restrict:"E",link:function(){},transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"partials/avatar.html"}}}]),angular.module("app.directives.notification",[]).directive("notification",[function(){return{restrict:"E",link:function(){},transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"partials/notification.html"}}}]);