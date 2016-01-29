var productControllers = angular.module('productControllers', [])

productControllers.factory('productFactory', ['$http', function ($http) {
	var service = {};
	
	service.products = [
	                    {
	                    	"key": 0,
	                    	"qty": 1,
	                    	"cost": 2300,
	                        "id": "tessa-turtle",
	                        "vendor": "mary-meyer",
	                        "imageUrl": "img/tessa-turtle.jpg", 
	                        "title": "Черепаха", 
	                        "snippet": "Черепаха с цветочками на панцыре, нежная и милая. Новинка 2016 года.",
	                        "images": ["img/tessa-turtle.jpg"],
	                        "style" : "col-sm-8"
	                    }
	                ];
	
	service.vendors = [
	                    {
	                       	"key": 0,
	                        "id": "mary-meyer",
	                        "imageUrl": "img/mary-meyer.jpg", 
	                        "title": "Mary Meyer", 
	                        "snippet": "Mary “Gram” Meyer started her beloved toy company in 1933. Over 80 years later, her children and grandchildren are keeping the legacy alive with over 400 products in the Mary Meyer line.",
	                        "images": ["img/mary-meyer.jpg"],
	                        "web": "http://www.marymeyer.com",
	                        "style" : "col-sm-8"
	                    }
	                ];
	
	service.invoice = { items: [] };
	service.orders	= [];
	service.error	= {};
	
	service.loadOrders = function(username) {
		if(!username) {
			return;
		}
		
		$http.post('/api/orders', { username: username })
    	.then(function(response) {
	    	if(response.status == 200) {
	    		service.error	= {};
	    		angular.copy(response.data.orders, service.orders);
	        } else {
	        	service.error.message 	= response.data.message;
	            service.error.status 	= response.status;
	        }
	    });
	};
	
	service.emptyOrders = function() {
		service.orders	= [];
		service.error	= {};
	}
	
	service.getOrderBy	= function(orderId) {
		return service.orders[orderId];
	//	for (var i = 0, len = service.orders.length; i < len; i++) {
	//		if (service.orders[i].id === orderId) {
	//			return service.orders[i];
	//		}
	//	}
	//	return null;
	};
	
	service.loadProducts = function() {
		$http.get('views/products.json').success(function(data) {
			angular.copy(data, service.products);
		});
		
		$http.get('views/vendors.json').success(function(data) {
			angular.copy(data, service.vendors);
		});
	};
	
	service.addToCart = function(product) {
		for(var i = 0, len = service.invoice.items.length; i < len; i++) {
			if(service.invoice.items[i].id === product.id) {
				service.invoice.items[i].qty = service.invoice.items[i].qty + 1;
				return;
			}
		}
		
		var item 	= {};
		item.id		= product.id;
		item.qty 	= 1;
		item.title 	= product.title;
		item.cost 	= product.cost;
		item.url	= '#/products/' + product.id;
		item.imgUrl	= product.imageUrl;
		
		service.invoice.items.splice(-1, 0, item);
	};
	
	service.selectedProduct = null;
	
	service.setCurrent = function(productId) {
		for (var i = 0, len = service.products.length; i < len; i++) {
			if (service.products[i].id === productId) {
				service.selectedProduct = service.products[i];
				return service.selectedProduct;
			}
		}
		return null;
	};
	
	service.getVendor = function(vendorId) {
		for (var i = 0, len = service.vendors.length; i < len; i++) {
			if (service.vendors[i].id === vendorId) {
				return service.vendors[i];
			}
		}
		return null;
	};
	
	
	service.getSelectedProduct = function() {
		return service.selectedProduct;
	};
	
	service.getNext = function() {
		if(service.selectedProduct == null) {
			return null;
		}
		for (var i = 0, len = service.products.length; i < len; i++) {
			if ( service.products[i] === service.selectedProduct ) {
				if( (i + 1) < len ) {
					return service.products[i+1].id;
				}
				else {
					return service.products[0].id;
				}
			}
		}
		return null;
	}
	
	service.getPrev = function() {
		if(service.selectedProduct == null) {
			return null;
		}
		for (var i = 0, len = service.products.length; i < len; i++) {
			if ( service.products[i] === service.selectedProduct ) {
				if( (i - 1) > 0 ) {
					return service.products[i-1].id;
				}
				else {
					return service.products[len-1].id;
				}
			}
		}
		return null;
	}
	
	service.ordersNumber = function() {
		return service.orders.length;
	}
	
	service.ordersSubtotal = function() {
		var subtotal = 0;
		
		if(service.orders) {
			angular.forEach(service.orders, function(order) {
				subtotal += order.amount;
			})
		}
		return subtotal;
	}
	
	service.ordersTotal = function() {
		var total = 0;
		
		if(service.orders) {
			angular.forEach(service.orders, function(order) {
				total += order.totalAmount;
			})
		}
		return total;
	}
	
	service.qty = function() {
		var qty = 0;
		angular.forEach(service.invoice.items, function(item) {
				qty += item.qty;
		})
		return qty;
	}
	
	service.total = function() {
		var total = 0;
		angular.forEach(service.invoice.items, function(item) {
				total += item.qty * item.cost;
		})
		return total;
	}	
	
	service.shiping = function() {
		var shiping = 0;

		if(service.total() < 3000 && service.total() > 0) {
			shiping = 300;
		} else {
			shiping = 0;
		}
		return shiping;
	}
	
	service.tax = function() {
		var tax = 0;
		
		tax = service.total() * 20/100;
		
		return tax;
	}
	
	service.setOrder = function(username, firstname, lastname, email, address, address2, city, postal, phone, total, amount, delivery, tax, totalAmount) {
		
		if(username) {
			service.invoice.username	= username;
		}
		
		service.invoice.firstname		= firstname;
		service.invoice.lastname		= lastname;
		service.invoice.email			= email;
		service.invoice.address			= address;
		
		if(address2) {
			service.invoice.address2	= address2;
		}
		service.invoice.city			= city;
		service.invoice.postal			= postal;
		service.invoice.phone			= phone;
		
		service.invoice.total			= total;
		service.invoice.amount			= amount;
		service.invoice.delivery		= delivery;
		service.invoice.tax				= tax;
		service.invoice.totalAmount		= totalAmount;
	};
	
	service.order = function (callback) {
     	
		$http.post('/api/order', { invoice: service.invoice })
         	.then(function (response) {
         			callback(response); }, 
         		  function (response) {
         			callback(response);
         	});
     };
     
     service.empty = function() {
    	 service.invoice.items = [];
     };
	
	return service;
}]);

productControllers.controller('orderListCtrl', ['$scope', '$location', 'productFactory', 'AuthenticationService', function ($scope, $location, productFactory, AuthenticationService) {
	
	$scope.username 	= AuthenticationService.getUsername();
	$scope.error 		= '';
	$scope.orders 		= [];
	
	productFactory.loadOrders($scope.username);
	
	if(!productFactory.error.message) {
		$scope.orders 	= productFactory.orders;
	}
	else {
		$scope.error 	= productFactory.error.message;
		$scope.orders 	= [];
	}
	
	$scope.ordersNumber = function() {
		return productFactory.ordersNumber();
	}

	$scope.ordersSubtotal = function() {
		return productFactory.ordersSubtotal();
	}
	
    $scope.ordersTotal	= function() { 
    	return productFactory.ordersTotal(); 
    };
    
    $scope.removeItem = function(index) {
    	return index;
	}
    
    $scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper' : 'menu-wrapper');
    }
}]);


productControllers.controller('checkoutController', ['$scope', '$location', 'productFactory', 'AuthenticationService', function ($scope, $location, productFactory, AuthenticationService) {
	
	$scope.tax 				= 20;
	$scope.invoice 			= productFactory.invoice;
	$scope.success 			= false;
	$scope.dataLoading 		= false;
	
	$scope.total = function() {
		return productFactory.total();
	}
	
	$scope.checkout = function() {
		$scope.dataLoading 	= true;
		$scope.username 	= AuthenticationService.getUsername();
		productFactory.setOrder($scope.username, 
								$scope.firstname, 
								$scope.lastname, 
								$scope.email, 
								$scope.address, 
								$scope.address2, 
								$scope.city, 
								$scope.postal, 
								$scope.phone,
								$scope.qty(),
								$scope.total(),
								$scope.shiping(),
								$scope.tax(),
								$scope.total() + $scope.shiping() + $scope.tax()
								);
		
		
		productFactory.order(function(response) {
		    	if(response.status == 200) {
		            $scope.dataLoading 	= false;
		            $scope.success 		= true;
		            productFactory.empty();
		        //  $location.path('#/checkout');
		        } else {
		        	$scope.error 		= response.data.message;
		            $scope.dataLoading 	= false;
		        }
		    });
	};

	$scope.shiping = function() {
		return productFactory.shiping();
	}
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.tax			= function() { 
    	return productFactory.tax(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper' : 'menu-wrapper');
    }
}]);

productControllers.controller('aboutController', ['$scope','productFactory', function ($scope, productFactory) {
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper' : 'menu-wrapper');
    }
}]);

productControllers.controller('contactController', ['$scope','productFactory', function ($scope, productFactory) {
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper' : 'menu-wrapper');
    }
}]);

productControllers.controller('loginController', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'productFactory', function ($scope, $rootScope, $location, AuthenticationService, productFactory) {
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper' : 'menu-wrapper');
    }
	// reset login status
	AuthenticationService.ClearCredentials();
		
	$scope.login = function () {
		$scope.dataLoading = true;
	    AuthenticationService.Login($scope.username, $scope.password, function(response) {
	    	if(response.status == 200) {
	    		AuthenticationService.SetCredentials($scope.username, $scope.password);
	            $location.path('/');
	        } else {
	        	$scope.error = response.data.message;
	            $scope.dataLoading = false;
	        }
	    });
	 };
	 
	 $scope.reg = function() {
		 $scope.newdataLoading = true;
		 AuthenticationService.Registration($scope.firstname, $scope.lastname, $scope.newusername, $scope.newpassword, function(response) {
		    	if(response.status == 200) {
		    		AuthenticationService.SetCredentials($scope.newusername, $scope.newpassword);
		            $location.path('/');
		        } else {
		        	$scope.error = response.data.message;
		            $scope.newdataLoading = false;
		        }
		    });
	 };
}]);

productControllers.controller('ProductListCtrl', ['$scope','productFactory', function ($scope, productFactory) {
	
	$scope.productClass = function(product) {
		return product.style;
	};
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
	
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper menu-front' : 'menu-wrapper');
    }
    
	productFactory.loadProducts();
	$scope.products 	= productFactory.products;
    $scope.orderProp 	= 'key';
    $scope.vendor		= null;
	
	$scope.nextVendor	= function(product) {
		if($scope.vendor) {
			if(product.vendor === $scope.vendor.id) {
				return false;
			}
		}
		$scope.vendor	= productFactory.getVendor(product.vendor);
		return true;
	};
}]);

productControllers.controller('OrderDetailCtrl', ['$scope', '$routeParams', 'productFactory', function($scope, $routeParams, productFactory) {
	$scope.orderId 		= $routeParams.orderId;
	$scope.order 		= productFactory.getOrderBy($scope.orderId);
	$scope.success 		= false;
	$scope.dataLoading 	= false;
	
	$scope.changeStatus	= function() {
		
	};
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper menu-front' : 'menu-wrapper');
    }
}]);

productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'productFactory', function($scope, $routeParams, productFactory) {
	$scope.productId 	= $routeParams.productId;
	$scope.product 		= productFactory.setCurrent($scope.productId);
	$scope.nextId		= productFactory.getNext();
	$scope.prevId		= productFactory.getPrev();
	
	$scope.addToCart = function(product) {
		productFactory.addToCart(product);
	};
	
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuOpen		= false;
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper menu-front' : 'menu-wrapper');
    }
}]);

productControllers.controller('cartController', ['$scope', '$routeParams', 'productFactory', function($scope, $routeParams, productFactory) {
	
	$scope.tax 			= 20;
	$scope.invoice 		= productFactory.invoice;
	$scope.menuOpen		= false;

	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.menuToggle	= function() {
    	$scope.menuOpen	= $scope.menuOpen ? false : true;
    }
    
    $scope.viewClass	= function() {
    	return ($scope.menuOpen ? 'menu-open' : '');
    }
    $scope.menuClass	= function() {
    	return ($scope.menuOpen ? 'menu-wrapper menu-front' : 'menu-wrapper');
    }
    
	$scope.removeItem = function(index) {
		productFactory.invoice.qty = productFactory.invoice.qty - $scope.invoice.items[index].qty;
		$scope.invoice.items.splice(index, 1);
	}

	$scope.total = function() {
		var total = 0;
		angular.forEach($scope.invoice.items, function(item) {
				total += item.qty * item.cost;
		})
		return total;
	}		

	$scope.shiping = function() {
		var shiping = 0;
		productFactory.invoice.qty = 0;

		if($scope.total() < 100) {
			shiping = 25;
		} else {
			shiping = 0;
		}
		return shiping;
	}
}]);