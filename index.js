"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var persona_1 = require("./persona");
var revista_1 = require("./revista");
var libreria_1 = require("./libreria");
var perez = new persona_1.Persona("Perez", 27678123);
var teoriaDeJuegos = new libro_1.Libro("Teoria de Juegos", perez, 2500, 511, "INFORMATICA");
var blaha = new persona_1.Persona("Rumbaugh Blaha", 16567432);
var libroRojo = new libro_1.Libro("Modelado y Diseño Orientados a Objetos", blaha, 4500, 675, "INFORMATICA");
var hill = new persona_1.Persona("McGraw Hill", 36567432);
var libroVerde = new libro_1.Libro("Economia Elementos de Micro y Macroeconomia", hill, 1500, 426, "ECONOMIA");
var revistaUser = new revista_1.Revista("Revista User", perez, 1000, 100, 2022);
var billiken = new revista_1.Revista("Billiken", hill, 1000, 300, 2021);
var catalina = new persona_1.Persona("Catalina", 47678123);
var german = new persona_1.Persona("German", 37678123);
var lila = new persona_1.Persona("Lila", 28678123);
var miLibreria = new libreria_1.Libreria([], [], []);
miLibreria.agregarCliente(catalina, "GALVEZ 710", 1, [hill, blaha], ["ECONONIA"]);
miLibreria.agregarCliente(german, "PIONEROS FUEGUINOS 670", 2, [perez, hill], ["INFORMATICA"]);
miLibreria.agregarCliente(lila, "FOURNIER 766", 3, [perez, hill], ["INFORMATICA", "ECONOMIA"]);
miLibreria.agregarArticulo(teoriaDeJuegos);
miLibreria.agregarArticulo(libroRojo);
miLibreria.agregarArticulo(libroVerde);
miLibreria.agregarArticulo(revistaUser);
miLibreria.agregarArticulo(billiken);
console.log("CONSULTAS");
console.log("Precio sin descuento Libro: " + teoriaDeJuegos.getPrecio());
console.log("Precio sin descuento Libro: " + teoriaDeJuegos.getPrecio());
console.log("Precio con descuento Libro: " + miLibreria.getPrecioLibro(miLibreria.getCliente("Catalina"), teoriaDeJuegos));
console.log("Precio con descuento Libro: " + miLibreria.getPrecioLibro(miLibreria.getCliente("German"), teoriaDeJuegos));
console.log("VENTAS");
miLibreria.ingresarVenta(miLibreria.getCliente("Catalina"), miLibreria.getArticulo("Teoria de Juegos"));
miLibreria.ingresarVenta(miLibreria.getCliente("German"), miLibreria.getArticulo("Billiken"));
console.log("Busqueda por Autor");
if (miLibreria.esFavoritoAutor(miLibreria.getCliente("Lila"), revistaUser)) {
    console.log("cliente German el Libro/Revista: " + revistaUser.getTitulo() + " Puede ser de sus Favoritos ");
}
console.log("Busqueda por genero");
if (miLibreria.esFavoritoGenero(miLibreria.getCliente("Lila"), libroVerde)) {
    console.log("cliente German el Libro/Revista: " + revistaUser.getTitulo() + " Puede ser de sus Favoritos ");
}
console.log("BUSQUEDA AVANZADA");
if (miLibreria.buscarGeneroAutor(miLibreria.getCliente("German"), teoriaDeJuegos)) {
    console.log("cliente German el Libro/Revista: " + teoriaDeJuegos.getTitulo() + " Puede ser de sus Favoritos ");
}
