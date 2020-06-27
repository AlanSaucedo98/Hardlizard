let homePage = require("./homePage");
let contacto = require("./contacto")
let sucursales = require("./sucursales");
let enCartelera = require("./enCartelera");
let masVotadas = require("./masVotadas");
let preguntasFrecuentes= require("./preguntasFrecuentes")

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
        res.write(contacto.titulo)
        res.write("\n")
        res.write(contacto.contenido)
        res.end()
    },
    masVotadas:function(res){
        res.write(`Total de pelis buenas : ` + masVotadas.pelisBuenas().length+"\n")
        res.write("\n")
        res.write("Peliculas buenas" + masVotadas.pelisBuenas())
        res.end()
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo)
        res.write("\n")
        res.write("Estas son las Preguntas frecuentes :" + preguntasFrecuentes.listadoPreguntas())
        res.end()
    },
    sucursales:function(res){
        res.write(sucursales.titulo + "\n")
        res.write("\n")
        res.write(`Estas son nuestras salas :` + sucursales.cantidadDeSalas())
        res.write("\n")
        res.write("\n")

        res.write("Listado de salas " + sucursales.salas())
        res.end()
    }

}
module.exports = index