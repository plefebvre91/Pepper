/* Create HTTP server instance */
var http = require('http');

/* Ingredients list */
var ingredients = 
{
    base : [
	{name:"Pâtes"},    
	{name:"Riz"},      
	{name:"Céréales méditerranéennes"}, 
	{name:"Haricots"}, 
	{name:"Lentilles"},
	{name:"Salade verte"},
	{name:"Chicon (endive)"},
	{name:"Pommes de terres"}
	
    ],

    vegetables: [
	{name:"Oignon"}, 
	{name:"Tomate"},
	{name:"Poivron"},
	{name:"Melon"},  
	{name:"Avocat"},
	{name:"Concombre"},
	{name:"Olives"},
	{name:"Pommes de terres"}
    ],

    cheese : [
	{name:"Comté"},  
	{name:"Feta"},
	{name:"Chèvre"},
	{name:"Parmesan"}
    ],
    
    meat: [
	{name:"Thon"},   
	{name:"Jambon"}, 
	{name:"Saumon"}, 
	{name:"Poulet"},
	{name:"Oeuf"},
	{name:"Lardons"},
	{name:"Gésiers"},
	{name:"Dinde"},
	{name:"Porc"},
	{name:"Saucisson Lyonnais"}
    ]
};


/* Initialize HTTP server */
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
	    
	    /* Send response */
	    response.write(
		JSON.stringify(
		    selectIngredients(ingredients)));
	    
	    response.end();
	});
    /* Listen */
}).listen(1234);


function randomBetween(a, b) {
    return Math.floor(Math.random() * b) + a;  
}

function selectIngredient(array) {
    var size = array.length;

    var n = randomBetween(0, size-1);

    return array[n];
}

function selectIngredients(ingredients) {
    var ing = new Object();
    ing.base  = selectIngredient(ingredients.base);
    ing.meat  = selectIngredient(ingredients.meat);
    ing.vegetables = selectIngredient(ingredients.vegetables);
    ing.cheese = selectIngredient(ingredients.cheese);

    return ing;
}
