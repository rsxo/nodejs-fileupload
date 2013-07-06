var http = require("http");
var url = require("url");

/*http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);*/

function start(route, handle){
	function onRequest(request, response){
		
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

		/* This just for text
		var postData = "";
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		request.addListener("end", function(){
			route(handle, pathname, response, postData);
		});*/

		//Before Post data
		//route(handle, pathname, response);

		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;