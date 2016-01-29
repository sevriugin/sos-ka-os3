var storeApp = angular.module('storeApp', [
                              'Authentication',
                              'ngRoute',
                              'ngCookies',
                              'productControllers']);

storeApp.config(['$routeProvider',
	                 	function($routeProvider) {
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
							when('/vendorProducts/:vendorId', {
								templateUrl: 'views/products.html',
								controller: 'ProductListCtrl'
							}).
							when('/vendor/:vendorId', {
								templateUrl: 'views/vendors.html',
								controller: 'VendorListCtrl'
							}).
							when('/cart', {
								templateUrl: 'views/cart.html',
								controller: 'cartController'
							}).
							when('/about', {
								templateUrl: 'views/about.html',
								controller: 'aboutController'
							}).
							when('/contact', {
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
							when('/orders/:orderId', {
								templateUrl: 'views/order-detail.html',
								controller: 'OrderDetailCtrl'
							}).
							otherwise({
								redirectTo: '/products'
							});
}]);

storeApp.run(['$rootScope', '$location', '$cookieStore', '$http',
      function ($rootScope, $location, $cookieStore, $http) {
          // keep user logged in after page refresh
          $rootScope.globals = $cookieStore.get('globals') || {};
          if ($rootScope.globals.currentUser) {
              $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
          }
}]);

storeApp.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$cookieStore', '$http', 'AuthenticationService', 'productFactory', function ($scope, $rootScope, $location, $cookieStore, $http, AuthenticationService, productFactory) {
	
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
	
	$scope.logout		= function() {
		AuthenticationService.ClearCredentials();
		productFactory.emptyOrders();
	}
}]);
