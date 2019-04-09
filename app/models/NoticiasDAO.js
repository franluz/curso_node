function NoticiasDAO(knex){
    this._knex=knex
    console.log('classe construida');
}
NoticiasDAO.prototype.getNoticia=(knex,callback)=>{
    knex.table(`noticias`).where('id_noticia',1).then(callback);
    console.log(` Aqui ${this._knex}`);
}
NoticiasDAO.prototype.getNoticias = (knex,callback)=>{
    knex.table(`noticias`).then(callback);
    console.log(` 11 ${this._knex}`);
}
NoticiasDAO.prototype.salvarNoticia = (noticia,knex,callback)=>{
    knex.table(`noticias`).insert(noticia).then(callback);
    console.log(` 15 ${this._knex}`);
}
module.exports = ()=>{
    return NoticiasDAO;
};
