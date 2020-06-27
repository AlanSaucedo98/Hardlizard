let homePage = require("./homePage");
let sucursales = require("./sucursales");
let enCartelera = require("./enCartelera");
let masVotadas = require("./masVotadas");


let index = {
    homePage:function(res){
        res.write(homePage.titulo);

        res.write("\n")

        res.write("Total: " + homePage.cantidad()+ "\n")

        res.write("\n")

        let titulos = homePage.listarPelis();
        for (ttitulo of titulos){
            res.write(ttitulo)
            res.write("\n")
        }
        res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo);
        res.write("\n")
        res.write("\n")
        res.write("\n")
        res.write("Total de Peliculas : " + enCartelera.cantidadDePelis())
        res.write("\n")
        res.write("\n")
        res.write("\n")
        res.write("Listado de Peliculas : \n" + enCartelera.carteleraActual())
        res.end()
    },
    contacto:function(res){

    },
    masVotadas:function(res){
        res.write(`Total de pelis buenas : ` + masVotadas.pelisBuenas().length+"\n")
        res.write("\n")
        res.write("Peliculas buenas" + masVotadas.pelisBuenas())
        res.end()
    },
    preguntasFrecuentes:function(res){

    },
    sucursales:function(res){
        res.write(sucursales.titulo)
        res.write("\n")
        res.write(`Estas son nuestras salas :` + sucursales.cantidadDeSalas())
        res.write("Listado de salas " + sucursales.salas())
        res.end()
    }

}
module.exports = index