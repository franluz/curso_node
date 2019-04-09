 module.exports = (application)=>{
	application.get('/noticias',(req,res,next)=>{
	 var knex = application.config.dbConnection;
	 var noticiasModel = new application.app.models.NoticiasDAO(knex);
	 noticiasModel.getNoticias(knex,(dados)=>{
	 	res.render('noticias/noticias',{noticias:dados});
	 });
});	
}

