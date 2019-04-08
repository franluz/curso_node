var http = require('http');
var server=http.createServer((req,res)=>{
	var categoria = req.url;
	if(categoria == '/tecnologia' ){
		
       res.end("<html><body>portal noticias tecnologia</body></html>");
	}else{
		res.end(`<html><body>portal noticias${categoria}</body></html>`);	
	}
	
});
server.listen(3000);