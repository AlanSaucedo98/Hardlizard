const fs = require('fs')

let sucursales = {
    db: './data/theaters.json',
    titulo : "Nuestras Salas",
    leerJSON: function() {
        let theatersJson = fs.readFileSync(this.db, 'utf-8');
        let lasSucursales = JSON.parse(theatersJson);
        return lasSucursales
    },
    cantidadDeSalas: function() {
        return this.leerJSON().total_theaters
    },
    salas:function(){
        let teatros = this.leerJSON();
        let todosLosTeatros =[]
        teatros.theaters.forEach(function(teatro){
            todosLosTeatros.push(`
            
            Nombre : ${teatros.theaters.name}
            Direccion: ${teatros.theaters.address}
            Descripcion:${teatros.theaters.description}

            `)
        });
        return todosLosTeatros
    }

}
module.exports = sucursales