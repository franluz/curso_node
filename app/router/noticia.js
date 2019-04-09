module.exports = (app)=>{
	app.get('/noticia',(req,res,next)=>{
	 const knex = app.config.dbConnection;
	 var noticiaModel = new app.app.models.NoticiasDAO(knex);
	 noticiaModel.getNoticia(knex,(dados)=>{
		res.render('noticias/noticias',{noticias:dados});
	});
	 
});	
}

