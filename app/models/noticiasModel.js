module.exports = ()=>{
    this.getNoticias=(knex,callback)=>{
        knex.table(`noticias`).where('id_noticia', '>','0').then(callback);
    }
    this.getNoticia = (knex,callback)=>{
        knex.table(`noticias`).where('id_noticia',1).then(callback);
    }
    return this;
};
