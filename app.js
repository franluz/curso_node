
var app = require('./config/server')

var rotaNoticias = require('./app/router/noticias')(app);
var rotaHome = require('./app/router/home')(app);
var rotaFormNoticia = require('./app/router/formulario_inclusao_noticia')(app);
app.listen(3000,()=>{
  console.log("servidor iniciado");
});
