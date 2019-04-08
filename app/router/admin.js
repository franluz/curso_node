module.exports = (app) => {
	app.get('/formulario_inclusao_noticia', (req, res, next) => {
		res.render('admin/form_add_noticia');
	});
	app.post('/noticias/salvar', (req, res, next) => {
		var noticia = req.body;
		var knex =  app.config.dbConnection;
		var noticiaModel = app.app.models.noticiasModel;
		noticiaModel.salvarNoticia(noticia,knex,(dados)=>{
			res.render('noticias/noticias',{noticias:dados});
		});
		 
	});
}

