var storeApp = angular.module('storeApp', [
                              'Authentication',
                              'ngRoute',
                              'ngCookies',
                              'productControllers', 
                              'angulartics', 
                              'angulartics.google.analytics',
                              'angularMoment']);

storeApp.config(['$routeProvider',
	                 	function($routeProvider, $analyticsProvider) {
						$routeProvider.
							when('/products', {
								templateUrl: 'views/products.html',
								controller: 'ProductListCtrl'
							}).
							when('/products/:productId', {
								templateUrl: 'views/product-detail.html',
								controller: 'ProductDetailCtrl'
							}).
							when('/vendors', {
								templateUrl: 'views/vendors.html',
								controller: 'VendorListCtrl'
							}).
							when('/partners', {
								templateUrl: 'views/partners.html',
								controller: 'PartnerListCtrl'
							}).
							when('/vendorProducts/:vendorId', {
								templateUrl: 'views/products.html',
								controller: 'ProductListCtrl'
							}).
							when('/vendor/:vendorId', {
								templateUrl: 'views/vendors.html',
								controller: 'VendorListCtrl'
							}).
							when('/partner/:partnerId', {
								templateUrl: 'views/partners.html',
								controller: 'PartnerListCtrl'
							}).
							when('/cart', {
								templateUrl: 'views/cart.html',
								controller: 'cartController'
							}).
							when('/about', {
								templateUrl: 'views/about.html',
								controller: 'aboutController'
							}).
							when('/article-01', {
								templateUrl: 'views/article-01.html',
								controller: 'ArticleListCtrl'
							}).
							when('/article-02', {
								templateUrl: 'views/article-02.html',
								controller: 'ArticleListCtrl'
							}).
							when('/article-03', {
								templateUrl: 'views/article-03.html',
								controller: 'ArticleListCtrl'
							}).
							when('/article-04', {
								templateUrl: 'views/article-04.html',
								controller: 'ArticleListCtrl'
							}).
							when('/article-05', {
								templateUrl: 'views/article-05.html',
								controller: 'ArticleListCtrl'
							}).
							when('/article/:articleId', {
								templateUrl: 'views/articles.html',
								controller: 'ArticleListCtrl'
							}).
							when('/articles', {
								templateUrl: 'views/articles.html',
								controller: 'ArticleListCtrl'
							}).
							when('/contact', {
								templateUrl: 'views/contact.html',
								controller: 'contactController'
							}).
							when('/preorder/:productId', {
								templateUrl: 'views/contact.html',
								controller: 'contactController'
							}).
							when('/login', {
								templateUrl: 'views/login.html',
								controller: 'loginController'
							}).
							when('/checkout', {
								templateUrl: 'views/checkout.html',
								controller: 'checkoutController'
							}).
							when('/orders', {
								templateUrl: 'views/myorders.html',
								controller: 'orderListCtrl'
							}).
							when('/terms', {
								templateUrl: 'views/terms-conditions.html',
								controller: 'MainCtrl'
							}).
							when('/orders/:orderId', {
								templateUrl: 'views/order-detail.html',
								controller: 'OrderDetailCtrl'
							}).
							otherwise({
								redirectTo: '/products'
							});
}]);

storeApp.run(['$rootScope', '$location', '$cookieStore', '$http', 'amMoment',
      function ($rootScope, $location, $cookieStore, $http, amMoment) {
		amMoment.changeLocale('ru');
          // keep user logged in after page refresh
          $rootScope.globals = $cookieStore.get('globals') || {};
          if ($rootScope.globals.currentUser) {
              $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
          }
}]);

storeApp.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$cookieStore', '$http', 'AuthenticationService', 'productFactory', function ($scope, $rootScope, $location, $cookieStore, $http, AuthenticationService, productFactory) {
	
	
	$scope.vendors	 	= productFactory.vendors;
	
	// show drop-down menu if user is logged in
	$scope.dropDown		= function() {
    
		var result 		= false;
	
    	if($rootScope.globals) {
    		if($rootScope.globals.currentUser) {
    			result = $rootScope.globals.currentUser.username;
    			result	= true;
    		}
    	}
    	return result;
    }
	
	// show LOGIN / REGISTER or user name and change dropDown 
	$scope.loginMenu	= function() {
    
		var result = 'LOGIN / REGISTER';
	
    	if($rootScope.globals) {
    		if($rootScope.globals.currentUser) {
    			result = $rootScope.globals.currentUser.username;
    		}
    	}
    	return result;
    }
	
	$scope.admin	 = function() {
		return AuthenticationService.isItAdmin();
	};
	
	$scope.logout		= function() {
		AuthenticationService.ClearCredentials();
		productFactory.emptyOrders();
	}
}]);
