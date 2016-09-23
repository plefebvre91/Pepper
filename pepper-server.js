/* Create HTTP server instance */
var http = require('http');

var ingredients = 
{
    base : [
	{name:"Pâtes"},    
	{name:"Riz"},      
	{name:"Céréales"}, 
	{name:"Haricots"}, 
	{name:"Lentilles"}
    ],

    vegetables: [
	{name:"Oignon"}, 
	{name:"Tomates"},
	{name:"Poivron"},
	{name:"Melon"},  
	{name:"Comté"},  
	{name:"Feta"}
    ],

    meat: [
	{name:"Thon"},   
	{name:"Jambon"}, 
	{name:"Saumon"}, 
	{name:"Poulet"}
    ]
};


http.createServer(function(request, response) {
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var body = [];
    
    /* Log any error on console */
    request.on('error', function(err) {
	console.error(err);
    })
    
    /* When data are coming */
	.on('data', function(chunk) {
	    body.push(chunk);
	})
    
    /* When all data have been received */
	.on('end', function() {

	    /* body contains the whole request */
	    body = Buffer.concat(body).toString();

	    /* Log error */
	    response.on('error', function(err) {
		console.error(err);
	    });
	    
	    /* Build response headers */
	    response.writeHead(200, {'Content-Type': 'application/json'})
	    
	    /* Build response */
	    var responseBody = {
		headers: headers,
		method: method,
		url: url,
		//body: body
	    };
	    
	    response.write(JSON.stringify(ingredients));
//	    response.write(responseBody.url);
	    
	    response.end();
	});
    /* Listen */
}).listen(1234);
