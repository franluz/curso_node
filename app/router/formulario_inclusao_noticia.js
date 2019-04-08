module.exports=(app)=>{
app.get('/formulario_inclusao_noticia',(req,res,next)=>{
	res.render('admin/form_add_noticia');
});
}

