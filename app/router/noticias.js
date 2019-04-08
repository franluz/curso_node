var knex = require('../../config/dbConnection')
module.exports = (app)=>{
	app.get('/noticias',(req,res,next)=>{
	
	knex('noticias').then((dados)=>{
//		res.send(dados);
		res.render('noticias/noticia',{noticias:dados});
	},next);

	//res.render('noticias/noticias');

});	
}

