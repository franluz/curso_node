module.exports = (app)=>{
	app.get('/noticia',(req,res,next)=>{
	 const knex = app.config.dbConnection;
	 var noticiaModel = app.app.models.noticiasModel;
	 noticiaModel.getNoticia(knex,(dados)=>{
		res.render('noticias/noticias',{noticias:dados});
	});
	 
});	
}

