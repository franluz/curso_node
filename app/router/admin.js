module.exports = (app) => {
	app.get('/formulario_inclusao_noticia', (req, res, next) => {
		res.render('admin/form_add_noticia');
	});
	app.post('/noticias/salvar', (req, res, next) => {
		var noticias=req.body;
		res.send(noticias);
	});
}

