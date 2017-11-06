var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	var result = url.parse(request.url, true);
	var page = result.pathname;

	if(page == '' || page == '/'){
		page = 'artigos.html';
	}
	if(!page.endsWith('.html')){
		page += '.html';
	}

	if(!fs.existsSync(__dirname +'/'+page)){
		page = 'erro.html';
	}

	fs.readFile(__dirname + '/'+page, function(erro, html){
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	});
});

server.listen(3000, function(){
	console.log('Servidor http.');
});