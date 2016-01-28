var storeApp = angular.module('StoreApp', [])

	storeApp.controller('cartController', ['$scope','Data', function($scope,Data) {
	
	$scope.tax = 20;
	$scope.invoice = Data.getInvoice();

	$scope.removeItem = function(index) {
		$scope.invoice.items.splice(index, 1);
	},

	$scope.total = function() {
		var total = 0;
		angular.forEach($scope.invoice.items, function(item) {
				total += item.qty * item.cost;
		})
		return total;
	}		

	$scope.shiping = function() {
		var shiping = 0;

		if($scope.total() < 100) {
			shiping = 25;
		} else {
			shiping = 0;
		}
		return shiping;
	}

}]);