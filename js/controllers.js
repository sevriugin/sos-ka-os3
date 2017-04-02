var productControllers = angular.module('productControllers', [])

productControllers.factory('productFactory', ['$http', function ($http) {
	var service = {};
	
	service.products = [
	                    {
	                    	"key": 0,
	                    	"qty": 1,
	                    	"cost": 2300,
	                        "id": "tessa-turtle",
	                        "productType" : "Соска",
	                        "age": "0-6 мес", 
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
	                        "style" : "col-sm-8",
	                        "details" : "Mary Meyer имеет эксклюзивную лицензию на производство сосок Wubbanub. Осьминог Wubbanub с соской-пустышкой Avent Soothie. Без латекса, без Бисфенола А (BPA ), поливинилхлорида (PVC) и без содержания Фталатов. Возможна стирка ручная и в стиральной машине при 30 градусах. Рекомендована для возраста от 0-6 месяцев. Длина 15.2 см."
	                    }
	                ];
	
	service.partners = [
	                    {
	                       	"key": 0,
	                        "id": "mariya-lugovaya",
	                        "imageUrl": "img/mariya-lugovaya.jpg", 
	                        "title": "Mariya Lugovaya", 
	                        "snippet": "Мария Луговая  будет рада приветствовать Вас на своём сайте www.newbornstory.ru Мария - детский и семейный фотограф с 2008 года. Живёт и работает в Москве и МО. Мария очень рада, что её хобби переросло в самую любимую работу! Она мама двух замечательных девочек, с их рождением, Мария поняла, как важны и дороги фотографии детей! Как хочется запомнить и сохранить в памяти каждый день, каждое достижение! 'Особое место для меня занимает съемка новорожденных. Каждый малыш уникален, я рада,  что имею возможность подарить Вам на долгую память воспоминания о том, каким крошечным он был. Ведь растут они очень быстро, и уже через месяц он будет другим.' - говорит Мария о своей работе.",
	                        "images": ["img/mariya-lugovaya.jpg"],
	                        "web": "http://www.newbornstory.ru",
	                        "style" : "col-sm-8",
	                        "details" : "Мария Луговая  будет рада приветствовать Вас на своём сайте www.newbornstory.ru Мария - детский и семейный фотограф с 2008 года. Живёт и работает в Москве и МО. Мария очень рада, что её хобби переросло в самую любимую работу! Она мама двух замечательных девочек, с их рождением, Мария поняла, как важны и дороги фотографии детей! Как хочется запомнить и сохранить в памяти каждый день, каждое достижение! 'Особое место для меня занимает съемка новорожденных. Каждый малыш уникален, я рада,  что имею возможность подарить Вам на долгую память воспоминания о том, каким крошечным он был. Ведь растут они очень быстро, и уже через месяц он будет другим.' - говорит Мария о своей работе."
	                     },
	                     {
		                     "key": 1,
		                     "id": "guzel-usmanova",
		                     "imageUrl": "img/usmanova.jpg", 
		                     "title": "Guzel Usmanova", 
		                     "snippet": "Дорогие друзья! Мы рады сообщить Вам, что в нашей 'лаборатории спокойствия мам' пополнение! Представляем Вам врача с 21 летним стажем работы, из них 10 лет неонатолог, неонатолог-реаниматолог Усманову Гузель Азатовну. Сейчас она является руководителем обучающей группы 'Уверенная мама с 1-х дней': лекции для беременных, обучающие тренинги, обучающие курсы по интернету, вебинары  - все направления по уходу за новорождённым ребёнком. Имея огромный практический опыт, Гузель готова поделиться с Вами своими знаниями и особенностями развития малыша и сохранения его здоровья на своём сайте уходзановорожденными.рф. Обучающий видеокурс 'Уверенная мама с 1-х дней' за 3 дня подготовит Вас по всем вопросам ухода за новорожденным ребёнком.",
		                     "images": ["img/usmanova.jpg"],
		                     "web": "http://уходзановорожденными.рф",
		                     "style" : "col-sm-8",
		                     "details" : "Дорогие друзья! Мы рады сообщить Вам, что в нашей 'лаборатории спокойствия мам' пополнение! Представляем Вам врача с 21 летним стажем работы, из них 10 лет неонатолог, неонатолог-реаниматолог Усманову Гузель Азатовну. Сейчас она является руководителем обучающей группы «Уверенная мама с 1-х дней»: лекции для беременных, обучающие тренинги, обучающие курсы по интернету, вебинары  - все направления по уходу за новорождённым ребёнком. Имея огромный практический опыт, Гузель готова поделиться с Вами своими знаниями и особенностями развития малыша и сохранения его здоровья на своём сайте уходзановорожденными.рф. Обучающий видеокурс 'Уверенная мама с 1-х дней' за 3 дня подготовит Вас по всем вопросам ухода за новорожденным ребёнком."
		                  }
	                ];
	
	service.articles = [
	                    {
	                       	"key": 0,
	                        "id": "article-01",
	                        "imageUrl": "img/article-01.jpg", 
	                        "title": "Приучение к соске", 
	                        "snippet": "Эту статью я решила написать для мам, которые столкнулись с проблемой нежелания малыша  брать соску. Есть ряд очевидных преимуществ соски, ради которых, всё же, стоит попытаться приучить ребёнка к пустышке.",
	                        "images": ["img/article-01.jpg","img/max.jpg"],
	                        "web": "https://www.sos-ka.com/article-01",
	                        "style" : "col-sm-8",
	                        "details" : "С первых минут жизни у ребёнка очень сильно развит врождённый сосательный рефлекс, который сохраняется у малышей до полутора-двух, а у некоторых и до трёх лет. Для его удовлетворения малыш либо ест, либо сосёт пустышку. Естественно, что ребёнок не в состоянии есть всё время, и в момент, когда он не голоден, но нуждается в сосании, целесообразно предложить ему соску.",
	                        "likes": 0,
	                        "comments" : 0,
	                        "success" : false,
	                        "dataLoading" : false,
	                        "isComment:" : false,
	                        "comment":"",
	                        "messages":[]
	                    },
	                    {
	                       	"key": 2,
	                        "id": "article-02",
	                        "imageUrl": "img/article-02-14.jpg", 
	                        "title": "Пережиток прошлого или необходимость?", 
	                        "snippet": "Будете ли вы пеленать ребёнка или нет, лучше всего решить заранее. Дело в том, что малыш привыкает к тому, что предоставляют ему с первых дней, и изменить решение будет довольно трудно.",
	                        "images": ["img/article-02-14.jpg","img/article-02-13.jpg"],
	                        "web": "https://www.sos-ka.com/article-02",
	                        "style" : "col-sm-8",
	                        "details" : "Пеленать или нет? Я уверена, что каждая мама в ожидании малыша задумывается над этим вопросом. Не ошибусь, если предположу, что большая часть мам заочно принимает решение никогда не пеленать, не ограничивать свободу малышу. Но, как показывает практика, 90% из этих числа мам с появлением малыша меняют своё решение в сторону пеленания на первые 1-3 месяца, а может и дольше, в зависимости от необходимости.",
	                        "likes": 0,
	                        "comments" : 0,
	                        "success" : false,
	                        "dataLoading" : false,
	                        "isComment:" : false,
	                        "comment":"",
	                        "messages":[]
	                    },
	                    {
	                       	"key": 3,
	                        "id": "article-03",
	                        "imageUrl": "img/nookums-04.jpg", 
	                        "title": "Почему малыш может срыгивать и что с этим делать?", 
	                        "snippet": "Молодых мам часто пугает срыгивания малыша и присутствует страх, что малыш во сне может захлебнуться срыгиваемой массой. Разберёмся что это и как быть.",
	                        "images": ["img/nookums-04.jpg"],
	                        "web": "https://www.sos-ka.com/article-03",
	                        "style" : "col-sm-8",
	                        "details" : "Молодых мам часто пугает срыгивания малыша и присутствует страх, что малыш во сне может захлебнуться срыгиваемой массой. Разберёмся что это и как быть.",
	                        "likes": 0,
	                        "comments" : 0,
	                        "success" : false,
	                        "dataLoading" : false,
	                        "isComment:" : false,
	                        "comment":"",
	                        "messages":[]
	                    },
	                    {
	                       	"key": 4,
	                        "id": "article-04",
	                        "imageUrl": "img/article-04-01.JPG", 
	                        "title": "Питание кормящих мам", 
	                        "snippet": "Питание женщины во время лактации должно быть максимально сбалансированным и безопасным для ребёнка. Сегодня есть продукты, которые не только безопасны, но даже рекомендованы для включения в рацион в период кормления грудью. Они помогают восполнить потребность организма женщины в витаминах и микроэлементах.",
	                        "images": ["img/article-04-01.JPG"],
	                        "web": "https://www.sos-ka.com/article-04",
	                        "style" : "col-sm-8",
	                        "details" : "Питание женщины во время лактации должно быть максимально сбалансированным и безопасным для ребёнка. Сегодня есть продукты, которые не только безопасны, но даже рекомендованы для включения в рацион в период кормления грудью. Они помогают восполнить потребность организма женщины в витаминах и микроэлементах.",
	                        "likes": 0,
	                        "comments" : 0,
	                        "success" : false,
	                        "dataLoading" : false,
	                        "isComment:" : false,
	                        "comment":"",
	                        "messages":[]
	                    },
	                    {
	                       	"key": 5,
	                        "id": "article-05",
	                        "imageUrl": "img/article-05-01-02.JPG", 
	                        "title": "Развитие зрения у младенцев", 
	                        "snippet": "Наконец, кроха у Вас на руках и впервые открывает свои глазки. Вы будете удивлены, но Мир ему не кажется таким уж прекрасным. Сегодня офтальмологи отмечают, что кроха может видеть предмет на расстоянии 20–30 см от его лица и на уровне глаз - не больше, и  видит предметы несколько размытыми, он не способен различать мелких деталей и видит  цвета на уровне 'ярче–темнее', но мамино лицо и грудь - малыш видит вполне отчётливо, это обусловлено инстинктами выживания.",
	                        "images": ["img/article-05-01-02.JPG"],
	                        "web": "https://www.sos-ka.com/article-05",
	                        "style" : "col-sm-8",
	                        "details" : "Наконец, кроха у Вас на руках и впервые открывает свои глазки. Вы будете удивлены, но Мир ему не кажется таким уж прекрасным. Сегодня офтальмологи отмечают, что кроха может видеть предмет на расстоянии 20–30 см от его лица и на уровне глаз - не больше, и  видит предметы несколько размытыми, он не способен различать мелких деталей и видит  цвета на уровне 'ярче–темнее', но мамино лицо и грудь - малыш видит вполне отчётливо, это обусловлено инстинктами выживания.",
	                        "likes": 0,
	                        "comments" : 0,
	                        "success" : false,
	                        "dataLoading" : false,
	                        "isComment:" : false,
	                        "comment":"",
	                        "messages":[]
	                    }
	                ];
	
	service.invoice = { items: [] };
	service.orders	= [];
	service.error	= {};
	service.contact	= {};
	service.comment = {};
	service.update 	= {};
	service.search	= '';
	
	service.isReady				= false;
	service.productsAreLoaded 	= false;
	service.vendorsAreLoaded	= false;
	service.toWait				= 1000;
	
	service.loadComments = function() {
		
		$http.post('/api/comments')
    	.then(function(response) {
	    	if(response.status == 200) {
	    		if(response.data.comments) {
	    			angular.forEach(response.data.comments, function(comment) {
	    				for(var i = 0, len = service.articles.length; i < len; i++) {
	    					if(service.articles[i].id === comment.id) {
	    						service.articles[i].comments 	= comment.comments;
	    						service.articles[i].likes 		= comment.likes;
	    						angular.copy(comment.messages, service.articles[i].messages);
	    						return;
	    					}
	    				}
	    			})
	    		}
	        }
	    });
	};
	
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
		// return service.orders[orderId];
		for (var i = 0, len = service.orders.length; i < len; i++) {
			if (service.orders[i]._id === orderId) {
				return service.orders[i];
			}
		}
		return null;
	};
	
	service.loadProducts = function() {
		$http.get('views/products.json').success(function(data) {
			service.productsAreLoaded = true;
			if(service.vendorsAreLoaded) {
				service.isReady	= true;
			}
			angular.copy(data, service.products);
		});
		
		$http.get('views/vendors.json').success(function(data) {
			service.vendorsAreLoaded = true;
			if(service.productsAreLoaded) {
				service.isReady	= true;
			}
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
		var vendor	= null;
		
		vendor		= service.getVendor(product.vendor);
		item.id		= product.id;
		item.qty 	= 1;
		item.title 	= product.title;
		item.cost 	= product.cost;
		item.url	= '#/products/' + product.id;
		item.imgUrl	= product.imageUrl;
		item.vendor	= vendor.title;
		
		service.invoice.items.splice(-1, 0, item);
	};
	
	service.addLike = function(article) {
		for(var i = 0, len = service.articles.length; i < len; i++) {
			if(service.articles[i].id === article.id) {
				service.articles[i].likes = service.articles[i].likes + 1;
				service.articles[i].isComment = true;
				return;
			}
		}
	};
	
	service.addComment = function(article) {
		for(var i = 0, len = service.articles.length; i < len; i++) {
			if(service.articles[i].id === article.id) {
				service.articles[i].comments = service.articles[i].comments + 1;
				service.articles[i].dataLoading = false;
				service.articles[i].success = true;
				return;
			}
		}
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

	service.getOptions = function(productId) {
		for (var i = 0, len = service.products.length; i < len; i++) {
			if (service.products[i].id === productId) {
				if(service.products[i].groupId) {
					var groupId = service.products[i].groupId;
					for (var j = 0, length = service.products.length; j < length; j++) {
						if (service.products[j].id === groupId) {
							if(service.products[j].options) {
								return service.products[j].options;
							}
							else {
								return null;
							}
						}
					}
				}
				else {
					return null;
				}
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
	};
	
	service.getNextForVendor = function () {
		if(service.selectedProduct == null) {
			return null;
		}
		
		var next 		= -1;
		var result		= null;
		var vendor 		= service.selectedProduct.vendor;
		
		for (var i = 0, len = service.products.length; i < len; i++) {
			if ( service.products[i] === service.selectedProduct ) {
				if( (i + 1) < len ) {
					next = i + 1;
					break;
				}
				else {
					next = 0;
					break;
				}
			}
		}
		
		if(next < 0) {
			return null;
		}
			
		for (var i = next, len = service.products.length; i < len; i++) {
			if ( service.products[i].vendor === vendor ) {
				result =  service.products[i].id;
				break;
			}
		}
		
		if(result) {
			return result;
		}
		for (var i = 0, len = next; i < len; i++) {
			if ( service.products[i].vendor === vendor ) {
				result =  service.products[i].id;
				break;
			}
		}
		return result;
	};
	
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
	};
	
	service.getPrevForVendor = function () {
		if(service.selectedProduct == null) {
			return null;
		}
		
		var prev 		= -1;
		var result		= null;
		var vendor 		= service.selectedProduct.vendor;
		
		for (var i = 0, len = service.products.length; i < len; i++) {
			if ( service.products[i] === service.selectedProduct ) {
				if( (i - 1) < 0 ) {
					prev = len - 1;
					break;
				}
				else {
					prev = i - 1;
					break;
				}
			}
		}
		
		if(prev < 0) {
			return null;
		}
			
		for (var i = prev; i >= 0; i--) {
			if ( service.products[i].vendor === vendor ) {
				result =  service.products[i].id;
				break;
			}
		}
		
		if(result) {
			return result;
		}
		for (var i = service.products.length - 1; i > prev; i--) {
			if ( service.products[i].vendor === vendor ) {
				result =  service.products[i].id;
				break;
			}
		}
		return result;
	};
	
	
	service.ordersNumber = function() {
		return service.orders.length;
	};
	
	service.ordersSubtotal = function() {
		var subtotal = 0;
		
		if(service.orders) {
			angular.forEach(service.orders, function(order) {
				subtotal += order.amount;
			})
		}
		return subtotal;
	};
	
	service.ordersTotal = function() {
		var total = 0;
		
		if(service.orders) {
			angular.forEach(service.orders, function(order) {
				total += order.totalAmount;
			})
		}
		return total;
	};
	
	service.qty = function() {
		var qty = 0;
		angular.forEach(service.invoice.items, function(item) {
				qty += item.qty;
		})
		return qty;
	};
	
	service.total = function() {
		var total = 0;
		angular.forEach(service.invoice.items, function(item) {
				if(item.id != "LexiCard-Dog-3m" && item.id != "LexiCard-Cat-3m") {
					total += item.qty * item.cost;
				}
		})
		return total;
	};	
	
	service.shiping = function() {
		var shiping = 0;

		if(service.total() < 3000 && service.total() > 0) {
			shiping = 330;
		} else {
			shiping = 330;
		}
		return shiping;
	};
	
	service.tax = function() {
		var tax = 0;
		
		// tax = service.total() * 20/100;
		
		return tax;
	};
	
	service.setOrder = function(username, firstname, lastname, email, address, address2, city, postal, phone, news, total, amount, delivery, tax, totalAmount, delivery_option, delivery_date, delivery_time, updateId) {
		
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

		if(news) {
			service.invoice.news		= news;
		}
		service.invoice.total			= total;
		service.invoice.amount			= amount;
		service.invoice.delivery		= delivery;
		service.invoice.tax				= tax;
		service.invoice.totalAmount		= totalAmount;
		service.invoice.delivery_option	= delivery_option;
		service.invoice.delivery_date	= delivery_date;
		service.invoice.delivery_time	= delivery_time;
		service.invoice.updateId		= updateId;
	};
	
	service.order = function (callback) {
     	
		$http.post('/api/order', { invoice: service.invoice })
         	.then(function (response) {
         			callback(response); }, 
         		  function (response) {
         			callback(response);
         	});
     };
     
     service.setComment = function(username, message, article) {
  		
  		service.comment.email			= username;
  		service.comment.message			= message;
  		service.comment.article			= article;
  	};
     
  	service.SendComment = function (callback) {
      	
 		$http.post('/api/comment', { comment: service.comment })
          	.then(function (response) {
          			callback(response); }, 
          		  function (response) {
          			callback(response);
          	});
      };
  	
     service.setContact = function(username, firstname, lastname, email, phone, message) {
 		
 		if(username) {
 			service.contact.username	= username;
 		}
 		
 		service.contact.firstname		= firstname;
 		service.contact.lastname		= lastname;
 		service.contact.email			= email;
 		service.contact.phone			= phone;
 		service.contact.message			= message;
 	};
     
     
     service.SendContactMsg = function (callback) {
      	
 		$http.post('/api/contactmsg', { contact: service.contact })
          	.then(function (response) {
          			callback(response); }, 
          		  function (response) {
          			callback(response);
          	});
      };
     
     service.setGoogleProduct = function() {
    	 // create from SelectedProduct the product 4 the Google Merchant Center Account
    	 if(service.selectedProduct == null) {
 			return null;
 		}
    	var	vendor							= 	service.getVendor(service.selectedProduct.vendor);
    	var googleProduct 					= 	{};
    	 
    	googleProduct.offerId 				= 	service.selectedProduct.id;
    	googleProduct.title					= 	service.selectedProduct.productType + " " + vendor.title + " " + service.selectedProduct.title;
    	googleProduct.description			=	service.selectedProduct.snippet;
    	googleProduct.brand					=	vendor.title;
    	googleProduct.ageGroup				= 	"newborn";
    	googleProduct.productType			=	"Baby & Toddler > Baby Health > Pacifiers & Teethers";
    	googleProduct.link					= 	"#/products/" + service.selectedProduct.id;
    	googleProduct.imageLink				= 	service.selectedProduct.imageUrl;
    	googleProduct.contentLanguage		= 	"RU";
    	googleProduct.targetCountry			= 	"RU";
    	googleProduct.channel				= 	"online";
    	googleProduct.availability			= 	"in stock";
    	googleProduct.condition				= 	"new";
    	googleProduct.googleProductCategory	= 	"Baby & Toddler > Baby Health > Pacifiers & Teethers";
    	googleProduct.price					= 	{"value": service.selectedProduct.cost, "currency": "RUB"};
    	googleProduct.shipping				= 	[{"country": "RU", "service":"Standard shipping", "price": {"value": "330", "currency": "RUB"}}];
    	googleProduct.shippingWeight		= 	{"value": "50", "unit": "grams"};
    	
    	return googleProduct;
     };
     
     service.SendProductToGoogle = function (callback) {
       	
  		$http.post('/api/sendtogoogle', { product: service.setGoogleProduct() })
           	.then(function (response) {
           			callback(response); }, 
           		  function (response) {
           			callback(response);
           	});
     };
     
     service.setYandexProducts = function() {
    	 // create array of products for Yandex Shopping
    	 
    	 var products = [];
    	 for (var i = 0, len = service.products.length; i < len; i++) {
    	
    		 var product							= service.products[i];
    		 var vendor								= service.getVendor(product.vendor);
    		 var yandexProduct 						= {};
    		 
    		 if(product.banner) {
    			 continue;
    		 }
    	 	 
    		 yandexProduct.id 						= product.key;
    		 yandexProduct.available				= product.qty > 0 ? "true" : "false";
    		 yandexProduct.bid						= "23";
    		 yandexProduct.cbid						= "43";
    		 yandexProduct.url						= "https://www.sos-ka.com/index.html#/products/" + product.id;
    		 yandexProduct.price					= product.cost;
    		 if(product.oldCost) {
    			 yandexProduct.oldprice				= product.oldCost; 
    		 }
    		 yandexProduct.currencyId				= "RUR";
    		 yandexProduct.categoryId				= "1100";
    		 yandexProduct.picture					= "https://www.sos-ka.com/" + product.imageUrl;
    		 yandexProduct.store					= "false";
    		 yandexProduct.delivery					= "true";
    		 yandexProduct.name						= product.productType + " " + vendor.title + " " + product.title;
    		 yandexProduct.vendor					= vendor.title;
    		 yandexProduct.model					= product.productType;
    		 yandexProduct.description				= product.snippet;
    		 yandexProduct.sales_notes				= "Оплата курьеру";
    		 yandexProduct.age						= 0;
    		 yandexProduct.manufacturer_warranty 	= "false";
    		 yandexProduct.shippingWeight			= {"value": "50", "unit": "grams"};	 
    	
    		 products.push(yandexProduct);
    	}
    	return products;
     };
     
     service.SendProductToYandex = function (callback) {
        	
   		$http.post('/api/yml', { products: service.setYandexProducts() })
            	.then(function (response) {
            			callback(response); }, 
            		  function (response) {
            			callback(response);
            	});
      };
      
     service.empty = function() {
    	 service.invoice.items = [];
     };
     
     service.emptyContact = function() {
    	 service.contact = {};
     };
     
     service.emptyComment = function() {
    	 service.comment = {};
     };
     
	// load products
    service.loadProducts();
    
    if(!service.isReady) {
    	for( i = 0; i < service.toWait; i++) {
    		;
    	}
    }
    
    return service;
}]);

productControllers.controller('orderListCtrl', ['$scope', '$location', 'productFactory', 'AuthenticationService', function ($scope, $location, productFactory, AuthenticationService) {
	
	$scope.username 	= AuthenticationService.getUsername();
	$scope.error 		= '';
	$scope.orders 		= [];
	$scope.pf			= productFactory;
	
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


productControllers.controller('checkoutController', ['$scope', '$location', 'productFactory', 'AuthenticationService', 'moment', function ($scope, $location, productFactory, AuthenticationService, moment) {
	
	$scope.tax 				= 20;
	$scope.invoice 			= productFactory.invoice;
	$scope.success 			= false;
	$scope.dataLoading 		= false;
	$scope.takeaway 		= '';
	$scope.delivery			= '';
	$scope.time				= '';
	$scope.news				= 'yes';
	$scope.itsUpdate		= false;
	
	$scope.moment			= moment();
	
	if(productFactory.update.phone) {
		$scope.itsUpdate	= true;
	}
	
	if(productFactory.update.phone) {
		$scope.username		= productFactory.update.username;
		$scope.firstname 	= productFactory.update.firstname; 
		$scope.lastname 	= productFactory.update.lastname;
		$scope.email 		= productFactory.update.email; 
		$scope.address 		= productFactory.update.address; 
		$scope.address2 	= productFactory.update.address2;
		$scope.city			= productFactory.update.city; 
		$scope.postal 		= productFactory.update.postal; 
		$scope.phone		= productFactory.update.phone;
		$scope.takeaway		= productFactory.update.takeaway;
		$scope.news			= productFactory.update.news;
	}

	$scope.product = productFactory.setCurrent("ReGa-1");
	
	$scope.updateId	= function() {
		if($scope.itsUpdate) {
			return productFactory.update.id;
		}
		return null;
	}
	
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
								$scope.news,
								$scope.qty(),
								$scope.total(),
								$scope.shiping(),
								$scope.tax(),
								$scope.total() + $scope.shiping() + $scope.tax(),
								$scope.takeaway,
								moment().add($scope.delivery, 'days').format('dddd Do MMMM YYYY'),
								$scope.time,
								$scope.updateId()
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
		if($scope.takeaway == 'takeaway') {
			return 120
		}
		else if ($scope.takeaway == 'post') {
			return 400
		}
		else if ($scope.takeaway == 'dpdauto') {
			return 400
		}
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

productControllers.controller('contactController', ['$scope', '$routeParams', 'productFactory', 'AuthenticationService', function ($scope, $routeParams, productFactory, AuthenticationService) {
	
	$scope.success 			= false;
	$scope.dataLoading 		= false;
	
	if($routeParams.productId) {
		$scope.productId 	= $routeParams.productId;
		$scope.product 		= productFactory.setCurrent($scope.productId);
		$scope.vendor		= productFactory.getVendor($scope.product.vendor);
		$scope.message		= 'Прошу оформить заказ на ' +
								$scope.product.productType + ' ' +
								$scope.vendor.title + ' ' + 
								$scope.product.title + ' в количестве : 1';
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
    
    $scope.send = function() {
		$scope.dataLoading 	= true;
		$scope.username 	= AuthenticationService.getUsername();
		productFactory.setContact(	$scope.username, 
									$scope.firstname, 
									$scope.lastname, 
									$scope.email,
									$scope.phone,
									$scope.message);
		
		
		productFactory.SendContactMsg(function(response) {
		    	if(response.status == 200) {
		            $scope.dataLoading 	= false;
		            $scope.success 		= true;
		            productFactory.emptyContact();
		        //  $location.path('#/checkout');
		        } else {
		        	$scope.error 		= response.data.message;
		            $scope.dataLoading 	= false;
		        }
		    });
	};
}]);

productControllers.controller('loginController', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'productFactory', function ($scope, $rootScope, $location, AuthenticationService, productFactory) {
	$scope.qty			= function() { 
    	return productFactory.qty(); 
    };
    
    $scope.success 		= false;
	$scope.dataLoading 	= false;
	
	$scope.admin	 = function() {
		return AuthenticationService.isItAdmin();
	};
	
	$scope.SendPassword = function() {
		$scope.dataLoading 	= true;
		AuthenticationService.SendPassword($scope.username, function(response) {
		    	if(response.status == 200) {
		            $scope.dataLoading 	= false;
		            $scope.success 		= true;
		        } else {
		        	$scope.error 		= response.data.message;
		            $scope.dataLoading 	= false;
		        }
		    });
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

productControllers.controller('ProductListCtrl', ['$scope', '$routeParams', 'AuthenticationService', 'productFactory', function ($scope, $routeParams, AuthenticationService, productFactory) {
	$scope.success 		= false;
	$scope.dataLoading 	= false;
	$scope.sexSelector	= '';
	
	$scope.admin	 = function() {
		return AuthenticationService.isItAdmin();
	};
	
	$scope.send = function() {
		$scope.dataLoading 	= true;
		productFactory.SendProductToYandex(function(response) {
		    	if(response.status == 200) {
		            $scope.dataLoading 	= false;
		            $scope.success 		= true;
		        } else {
		        	$scope.error 		= response.data.message;
		            $scope.dataLoading 	= false;
		        }
		    });
	};
	
	$scope.toggelSex = function(sex) {
		if($scope.sexSelector == sex) {
			$scope.sexSelector = '';
		} else {
			$scope.sexSelector = sex;
		}
	};
	
	$scope.sexClass = function(sex) {
		if($scope.sexSelector == sex) {
			return "icon-radio-checked";
		} else {
			return "icon-radio-unchecked";
		}
	};
	
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
    
	// productFactory.loadProducts();
    
	$scope.products 	= productFactory.products;
    $scope.orderProp 	= 'key';
    $scope.vendor		= null;
    $scope.query		= '';
    
    if($routeParams.vendorId) {
    	$scope.query	= $routeParams.vendorId;
    	$scope.vendor	= productFactory.getVendor($routeParams.vendorId);
    }
    
	$scope.nextVendor	= function(product) {
		if($scope.vendor) {
			if(product.vendor === $scope.vendor.id) {
				return false;
			}
		}
		$scope.vendor	= productFactory.getVendor(product.vendor);
		return true;
	};
	
	$scope.queryActive 	= function() {
		if($scope.query !='') {
			return true;
		}
		return false;
	};
}]);

productControllers.controller('VendorListCtrl', ['$scope', '$routeParams', 'productFactory', function ($scope, $routeParams, productFactory) {
	
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
    
	$scope.vendors	 	= productFactory.vendors;
	$scope.query		= '';
    
    if($routeParams.vendorId) {
    	$scope.query	= $routeParams.vendorId;
    }
}]);

productControllers.controller('PartnerListCtrl', ['$scope', '$routeParams', 'productFactory', function ($scope, $routeParams, productFactory) {
	
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
    
	$scope.partners	 	= productFactory.partners;
	$scope.query		= '';
    
    if($routeParams.partnerId) {
    	$scope.query	= $routeParams.partnerId;
    }
}]);


productControllers.controller('ArticleListCtrl', ['$scope', '$rootScope', '$routeParams', 'AuthenticationService', 'productFactory', function ($scope, $rootScope, $routeParams, AuthenticationService, productFactory) {
	
	$scope.productClass = function(product) {
		return product.style;
	};
	
	productFactory.loadComments();
	
	$scope.username = AuthenticationService.getUsername();
	
	$scope.registered	= function() {
	    
		var result = false;
	
    	if($rootScope.globals) {
    		if($rootScope.globals.currentUser) {
    			result = true;
    		}
    	}
    	return result;
    }
	
	$scope.getMessages = function(messages) {
		result = '';
		angular.forEach(messages, function(message) {
			result = result + message.user.substr(0,5) + '**** : '+ message.message + ' \n\n';
		})
		if(result == '') {
			result = 'НЕТ КОММЕНТАРИЕВ';
		}
		return result;
	}
	
	$scope.default_comment = function() {
		return ($scope.registered() ? 'ваш комментарий' : 'для того, чтобы оставить комментарий войдите или зарегистрируйтесь');
	}
	
	$scope.addLike = function(article) {
		if(article.isComment) {
			productFactory.setComment($scope.username, article.comment, article);
			productFactory.SendComment(function(response) {
		    	if(response.status == 200) {
		    		productFactory.addComment(article);
		    		productFactory.loadComments();
		        } else {
		        	$scope.error 		= response.data.message;
		            article.dataLoading = false;
		        }
		    });
		}
		else {
			productFactory.addLike(article);
		}
	};
	
	$scope.likeOrComment	= function(article) {
		return (article.isComment ? 'Comment' : 'Like');
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
    
	$scope.articles	 	= productFactory.articles;
	$scope.query		= '';
    
    if($routeParams.articleId) {
    	$scope.query	= $routeParams.articleId;
    }
}]);



productControllers.controller('OrderDetailCtrl', ['$scope', '$routeParams', 'productFactory', function($scope, $routeParams, productFactory) {
	$scope.orderId 		= $routeParams.orderId;
	$scope.order 		= productFactory.getOrderBy($scope.orderId);
	$scope.success 		= false;
	$scope.dataLoading 	= false;
	
	$scope.changeStatus	= function() {
		productFactory.update = $scope.order
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

productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'AuthenticationService', 'productFactory', function($scope, $routeParams, AuthenticationService, productFactory) {
	$scope.productId 	= $routeParams.productId;
	$scope.product 		= productFactory.setCurrent($scope.productId);
	$scope.nextId		= productFactory.getNext();
	$scope.prevId		= productFactory.getPrev();
	$scope.vendor		= productFactory.getVendor($scope.product.vendor);
	$scope.nextVId		= productFactory.getNextForVendor();
	$scope.prevVId		= productFactory.getPrevForVendor();
	$scope.options		= productFactory.getOptions($scope.productId);

	$scope.success 		= false;
	$scope.dataLoading 	= false;
	
	$scope.admin	 = function() {
		return AuthenticationService.isItAdmin();
	};
	
	$scope.send = function() {
		$scope.dataLoading 	= true;
		productFactory.SendProductToGoogle(function(response) {
		    	if(response.status == 200) {
		            $scope.dataLoading 	= false;
		            $scope.success 		= true;
		        } else {
		        	$scope.error 		= response.data.message;
		            $scope.dataLoading 	= false;
		        }
		    });
	};

	$scope.getOptions = function() {
		return productFactory.getOptions($scope.product);
	};

	$scope.getSelectedOptions = function(tag) {
		if(tag == null) {
			return null;
		}

		if($scope.options) {
			for (var i = 0; i < $scope.options.length; i++) {
				if(Object.keys($scope.options[i])[0] == tag) {
					return $scope.options[i];
				}
			}
		}
		else {
			return null;
		}
	};

	$scope.getOptionById = function(id) {
		if($scope.product.option) {
			if(id == 0) {
				return Object.keys($scope.product.option)[0];
			}
			else if (id == 1) {
				tag = Object.keys($scope.product.option)[0];
				return $scope.product.option[tag];
			}
			else {
				return null;
			}
		}
		else {
			return null;
		}
	};

	$scope.getOptionValue = function(obj) {
		var value = Object.keys(obj)[0];
		return value;
	};

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

    $scope.option_0		= $scope.getOptionById(0);
    $scope.options_0	= [];

    for (var i = 0; i < $scope.options.length; i++) {
    	var key = Object.keys($scope.options[i])[0];
    	$scope.options_0.push( key );
    }
});

productControllers.controller('cartController', ['$scope', '$routeParams', 'productFactory', function($scope, $routeParams, productFactory) {
	
	$scope.tax 			= productFactory.tax();
	$scope.invoice 		= productFactory.invoice;
	$scope.menuOpen		= false;
	$scope.itsUpdate	= false; 

	if(productFactory.update.phone) {
		$scope.itsUpdate	= true;
	}
	
	$scope.skipUpdate	= function() {
		productFactory.update = {}
	}
	
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
		return productFactory.shiping();
	}
}]);