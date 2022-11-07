import { Articulo } from "./articulo";
import { Cliente } from "./cliente";
import { Libro } from "./libro";
import { Persona } from "./persona";
import { Revista } from "./revista";
import { Venta } from "./venta";
import { Libreria } from "./libreria";

let perez = new Persona("Perez", 27678123);

let teoriaDeJuegos = new Libro("Teoria de Juegos", perez, 2500, 511, "INFORMATICA");

let blaha = new Persona("Rumbaugh Blaha", 16567432);

let libroRojo = new Libro("Modelado y Diseño Orientados a Objetos", blaha, 4500, 675, "INFORMATICA");

let hill = new Persona("McGraw Hill", 36567432);

let libroVerde = new Libro("Economia Elementos de Micro y Macroeconomia", hill, 1500, 426, "ECONOMIA");

let revistaUser = new Revista("Revista User", perez, 1000, 100, 2022);

let billiken = new Revista("Billiken", hill, 1000, 300, 2021);

let catalina = new Persona("Catalina", 47678123);
let german = new Persona("German", 37678123);
let lila = new Persona("Lila", 28678123);

let miLibreria = new Libreria([], [], []);

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
    console.log("cliente German el Libro/Revista: " + revistaUser.getTitulo() + " Puede ser de sus Favoritos ")
}

console.log("Busqueda por genero");

if (miLibreria.esFavoritoGenero(miLibreria.getCliente("Lila"), libroVerde)) {
    console.log("cliente German el Libro/Revista: " + revistaUser.getTitulo() + " Puede ser de sus Favoritos ")
}

console.log("BUSQUEDA AVANZADA");

if (miLibreria.buscarGeneroAutor(miLibreria.getCliente("German"), teoriaDeJuegos)) {
    console.log("cliente German el Libro/Revista: " + teoriaDeJuegos.getTitulo() + " Puede ser de sus Favoritos ")
}
