module.exports = (app) => {
	app.get('/formulario_inclusao_noticia', (req, res, next) => {
		res.render('admin/form_add_noticia',{validacao:null,noticia:null});
	});
	app.post('/noticias/salvar', (req, res, next) => {
		var noticia = req.body;
		var knex =  app.config.dbConnection;
		var noticiasModel = new app.app.models.NoticiasDAO(knex);

		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('noticia','Noticia é obrigatório').notEmpty();
		req.assert('resumo','Resumo é precisa ter mais de 10 e menos de 100 caracteres').len(10,100);
	//	console.log(noticia);
		var erros= req.validationErrors();
		if(!erros){
			noticiasModel.salvarNoticia(noticia,knex,(dados)=>{
				res.redirect('/noticias');
			});
		}else{
			console.log('certo');
			res.render('admin/form_add_noticia',{validacao:erros,noticia:noticia});
		}
		 
	});
}

