const fs = require('fs')

let enCartelera = {
    db: './data/movies.json',
    titulo : "En Cartelera :",
    leerJSON: function() {
        let theatersJson = fs.readFileSync(this.db, 'utf-8');
        let cartelera = JSON.parse(theatersJson);
        return cartelera
    },
    cantidadDePelis: function() {
        return this.leerJSON().total_movies
    },
    carteleraActual:function(){
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(`
            Titulo : ${movie.title}
            Reseña : ${movie.overview}
            `)
        })
        
        return titleMovies
    }
}
    
        
       


module.exports = enCartelera