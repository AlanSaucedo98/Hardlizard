const fs = require('fs')

let masVotadas = {
bd: './data/movies.json',
titulo : "Mas Votadas",
leerJSON: function() {
    let moviesJson = fs.readFileSync(this.bd, 'utf-8');
    let movies = JSON.parse(moviesJson);
    return movies
},
pelisBuenas:function(){
    let movies = this.leerJSON();
    let pelisSiete = []
    
        movies.movies.forEach(function(movie) {

            if (movie.vote_average >= 7) {
            pelisSiete.push(`
            
            Titulo : ${movie.title}
            Ratio : ${movie.vote_average}
            Reseña : ${movie.overview}
            `)}
            
        })
       return pelisSiete   
},

}
module.exports = masVotadas