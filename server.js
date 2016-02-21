#!/bin/env node
//  OpenShift sample Node application
var express 	= require('express');
var fs      	= require('fs');
var mongodb 	= require('mongodb');

var nodemailer 	= require('nodemailer');
var bodyParser	= require('body-parser');

var jade 		= require('jade'); 

//create application/json parser 
var jsonParser 			= bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser 	= bodyParser.urlencoded({ extended: true })

//create reusable transporter object using SMTP transport
var transporter 		= nodemailer.createTransport({
	host: 'smtp.mailgun.org',
	auth: {
		user: 'postmaster@mg.sos-ka.com',
		pass: '4a2eba988d7d49ff8df89bad7068f704'
	}
});

var MongoClient = mongodb.MongoClient;

//NB! No need to recreate the transporter object. You can use
//the same transporter object for all e-mails

//setup e-mail data with unicode symbols
var mailOptions 		= {
		from:'<order@sos-ka.com>',							// sender address
		sender:'<order@sos-ka.com>',
		replyTo:'<order@mg.sos-ka.com>',
		to:'order@mg.sos-ka.com', 							// list of receivers
		cc:'order@mg.sos-ka.com',
		subject:'New Order #', 								// Subject line
		text:'Hello world from SOS-ka.com', 				// plaintext body
		html: '<b>Hello world from SOS-ka.com</b>' 			// html body
};

var google 			= require('googleapis');
var OAuth2Client 	= google.auth.OAuth2;
var scopes 			= ['https://www.googleapis.com/auth/content'];

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID 		= '729636733720-oi3nbsa627i2iet6p3joa4af2cdm072j.apps.googleusercontent.com';
var CLIENT_SECRET 	= '2tjb4LuT8_yV67ZrX_owLnmy';
//  				  'urn:ietf:wg:oauth:2.0:oob';
var	REDIRECT_URL 	= 'http://www.sos-ka.com/api/OAuth2';
var MERCHANT_ID		= 110063336;

var oauth2Client 	= new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
var url 			= oauth2Client.generateAuthUrl({
	  					access_type: 'online', 		// 'online' (default) or 'offline' (gets refresh_token)
	  					scope: scopes 				// If you only need one scope you can pass it as string
					});

var content 		= google.content({ version: 'v2', auth: oauth2Client });

/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
    	
        //  Set the environment variables we need.
        self.ipaddress 			= process.env.OPENSHIFT_NODEJS_IP;
        self.port      			= process.env.OPENSHIFT_NODEJS_PORT || 8080;
        self.connection_string  = '127.0.0.1:27017/OpenShift-Sample-App';
        
        if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        	  self.connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        	  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        	  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        	  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        	  process.env.OPENSHIFT_APP_NAME;
        }

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };
    
    /* MongoDb helpers													  */
    /* shop.users collection											  */
    
    self.insertNewUser = function(user) {
    	
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
        };
        
        self.routes['/index.html/#/products'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
        };
        
        self.routes['/auth'] = function(req, res) {
        	console.log('/auth');
        	res.redirect(301, url);
        };
        
        self.routes['/list'] = function(req, res) {
        	console.log('/list');
        	content.products.list({ merchantId: MERCHANT_ID }, function(err, response) {
        		// handle err and response
        		if(err) {
        			console.log('/list error: ', err.message);
        			res.status(202).json({status:"error", message:err.message });
        		}
        		else {
        			res.status(200).json({status:"ok", result: response });
        		}
        	});
        };
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express();

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
        
        self.app.get('/api/OAuth2', urlencodedParser, function(req, res) {
        	console.log('/GET request to /api/OAuth2');
        	console.log(req.query.code);
        	
        	oauth2Client.getToken(req.query.code, function(err, tokens) {
        		  // Now tokens contains an access_token and an optional refresh_token. Save them.
        		  if(!err) {
        		    oauth2Client.setCredentials(tokens);
        		    console.log('setCredentials(tokens) tokens:', tokens);
        		    res.redirect(301, "#/products");
        		  }
        		  else {
        			  console.log('setCredentials(tokens) error:', err);
        			  res.status(202).json({status:"error", message:err.message });
        		  }
        	});
        });
        
        self.app.post('/api/orders', jsonParser, function(req, res) {
        	console.log('/POST request to /api/orders');
        	
        	var user = {};
    		
        	user.username	= req.body.username;
        	
        	console.log('/api/orders/loading orders for user : ', user.username);
        	
        	MongoClient.connect('mongodb://'+ self.connection_string, function(err, db) {
          	  if(err) { return res.status(500).json({status:"error", message:err }); }
        		  
          	  var select 		= {};
          	  var coll			= db.collection('shop.orders');
          	  select.username 	= user.username;
          	  
          	  if(user.username == 'admin') {
          		  select = {};
          	  }
        		  
          	  coll.find(select).toArray(function(err, docs) {
          		  if(err) { return res.status(500).json({status:"error", message:err }); }
          		  
          		  var count = docs.length;
          		  console.log('/api/orders/number of orders : %d', count );
        			  
          		  if(count > 0) {
          			  res.status(200).json({status:"ok", orders:docs});
          		  }
          		  else {
          			  res.status(202).json({status:"error", message:"No orders selected" });
          		  }
          		  db.close();
          	  })
        	})	
        });
        
        self.app.post('/api/order', jsonParser, function(req, res) {
        	console.log('/POST request to /api/order');
        	
        	var invoice 	= {};
        	var imgPath		= 'http://bimbi-yabe.rhcloud.com/';
        		
        	invoice		 	= req.body.invoice;
        	invoice.id		= 'Order #' + req.body.invoice.phone + '-' + Date(Date.now());
        	
        	for (var i = 0, len = invoice.items.length; i < len; i++) {
        		invoice.items[i].imgUrl	= imgPath + invoice.items[i].imgUrl;
        		
        		console.log('--- imgUrl : ', invoice.items[i].imgUrl);
        	}
        	
        	if(!invoice.username) {
        		invoice.username = 'UNREGISTERED';
        	}
        	
        	console.log('Place new order from : ', invoice.username);
        	
        	MongoClient.connect('mongodb://'+ self.connection_string, function(err, db) {
          	  if(err) { return res.status(500).json({status:"error", message:err }); }
        		  
          	  var select 		= {};
          	  var coll			= db.collection('shop.orders');
          	  select.username 	= invoice.username;
        		  
          	  coll.find(select).count(function(err, count) {
          		  if(err) { return res.status(500).json({status:"error", message:err }); }
          		  console.log('/api/order/user order count : %d', count );
        			  
          		  coll.insertOne(invoice, function(err, r) {
          			  if(err) { return res.status(500).json({status:"error", message:err }); }
          			  console.log('/api/order/order inserted : %d', r.insertedCount );

          			  // Compile a function
          			  var fn = jade.compileFile('./views/order_email.jade');

          			  // Render the function
          			  var html = fn({invoice:invoice});
          				  
          			  // Sending mail
          			  mailOptions['subject']	= invoice.id;
          			  mailOptions['html'] 		= html;
          			  mailOptions['to']			= invoice.email;
          			  mailOptions['cc']			= 'order@mg.sos-ka.com';
          				  
          			  //send mail with defined transport object
          			  transporter.sendMail(mailOptions, function(error, info) {
          				  if(error) {
          					  	return console.log(error);
          				  }
          				  		console.log('Message sent: ' + info.response);
          			  });
          				  
          			  res.status(200).json({status:"ok"});
          			  db.close();
          		  })
          	  })
        	})
        });
        
        self.app.post('/api/authenticate', jsonParser, function(req, res) {
        	console.log('/POST request to /api/authenticate');
        	
        	var user = {};
    		
        	user.username	= req.body.username;
        	user.authdata	= req.body.authdata;
        	
        	console.log('/api/authenticate/login user : ', user);
        	
        	MongoClient.connect('mongodb://'+ self.connection_string, function(err, db) {
          	  if(err) { return res.status(500).json({status:"error", message:err }); }
        		  
          	  var select 		= {};
          	  var coll			= db.collection('shop.users');
          	  select.username 	= user.username;
        		  
          	  coll.find(select).toArray(function(err, docs) {
          		  if(err) { return res.status(500).json({status:"error", message:err }); }
          		  
          		  var count = docs.length;
          		  console.log('/api/authenticate/user count : %d', count );
        			  
          		  if(count > 0) {
          			  if(docs[0].authdata === user.authdata) {
          				  res.status(200).json({status:"ok"});
          			  }
          			  else {
          				res.status(202).json({status:"error", message:"Invalid password" });
          			  }
          		  }
          		  else {
          			  res.status(202).json({status:"error", message:"User is not registred" });
          		  }
          		  db.close();
          	  })
        	})
        	
        });
        
        self.app.post('/api/registration', jsonParser, function(req, res) {
        	console.log('/POST request to /api/registration');
        	
        	var user = {};
        		
        	user.firstname 	= req.body.firstname;
        	user.lastname	= req.body.lastname;
        	user.username	= req.body.username;
        	user.authdata	= req.body.authdata;
        		
        	console.log('Adding new user : ', user);
        	
        	MongoClient.connect('mongodb://'+ self.connection_string, function(err, db) {
          	  if(err) { return res.status(500).json({status:"error", message:err }); }
        		  
          	  var select 		= {};
          	  var coll			= db.collection('shop.users');
          	  select.username 	= user.username;
        		  
          	  coll.find(select).count(function(err, count) {
          		  if(err) { return res.status(500).json({status:"error", message:err }); }
          		  console.log('/api/registration/user count : %d', count );
        			  
          		  if(count == 0) {
          			  coll.insertOne(user, function(err, r) {
          				  if(err) { return res.status(500).json({status:"error", message:err }); }
          				  console.log('/api/registration/user inserted : %d', r.insertedCount );

          				  // Compile a function
          				  var fn = jade.compileFile('./views/registration_email.jade');

          				  // Render the function
          				  var html = fn({user:user});
          				  
          				  // Sending mail
          				  mailOptions['subject']	= 'New registration';
          				  mailOptions['html'] 		= html;
          				  mailOptions['to']			= user.username;
          				  mailOptions['cc']			= 'order@mg.sos-ka.com';
          				  
          				  //send mail with defined transport object
          				  transporter.sendMail(mailOptions, function(error, info) {
          					  if(error) {
          						  return console.log(error);
          					  }
          					  console.log('Message sent: ' + info.response);
          				  });
          				  
          				  res.status(200).json({status:"ok"});
          				  db.close();
          			  })
          		  }
          		  else {
          			res.status(202).json({status:"error", message:"User already exists" });
          		  }
          	  })
        	})
        });
       
        
        self.app.post('/api/contactmsg', jsonParser, function(req, res) {
        	console.log('/POST request to /api/contactmsg');
        				  
          	// Sending mail
          	mailOptions['subject']	= 'Message from ' + req.body.contact.firstname + ' ' + req.body.contact.lastname;
          	mailOptions['to']		= 'order@mg.sos-ka.com';
        	mailOptions['html'] 	= req.body.contact.message;
        	mailOptions['replyTo'] 	= req.body.contact.email;
          				  
          	//send mail with defined transport object
          	transporter.sendMail(mailOptions, function(error, info) {
          		if(error) {
          			return console.log(error);
          		}
          		console.log('Message sent: ' + info.response);
          	});
          	
          	res.status(200).json({status:"ok"});
        }); 
        
        self.app.post('/api/sendtogoogle', jsonParser, function(req, res) {
        	console.log('/POST request to /api/sendtogoogle');
        	console.log(req.body.product);			  
          	// main action place here
        	// update path
        	
        	var appPath			= 'http://www.sos-ka.com/';
        	var product 		= req.body.product;
        	product.link		= appPath + product.link;
        	product.imageLink	= appPath + product.imageLink;
        	
        	content.products.insert({ merchantId: MERCHANT_ID, resource: product }, function(err, response) {
        		// handle err and response
        		if(err) {
        			console.log('/insert error: ', err.message);
        			res.status(202).json({status:"error", message:err.message });
        		}
        		else {
        			console.log('/insert : ', response);
        			res.status(200).json({status:"ok", result: response });
        		}
        	});
        });
        
        
      //serve static assets
      self.app.use(express.static(__dirname +'/'));
      
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };
      
    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

