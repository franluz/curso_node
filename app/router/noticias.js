 module.exports = (application)=>{
	application.get('/noticias',(req,res,next)=>{
	 const knex = application.config.dbConnection;
	 var noticiasModel = application.app.models.noticiasModel;
	 noticiasModel.getNoticias(knex,(dados)=>{
	 	res.render('noticias/noticias',{noticias:dados});
	 });
	  //	 console.log(application);
});	
}

