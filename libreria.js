"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var cliente_1 = require("./cliente");
var venta_1 = require("./venta");
var Libreria = /** @class */ (function () {
    function Libreria(pclientes, PLibro, pVentas) {
        this.clientes = pclientes;
        this.libros = PLibro;
        this.ventas = pVentas;
        this.CantidadVentas = 0;
    }
    Libreria.prototype.agregarCliente = function (pPersona, pDireccion, pDescuento, pAutores, pGenero) {
        var nuevoCliente = new cliente_1.Cliente(pPersona.getNombre(), pPersona.getDni(), pDireccion, pDescuento, pAutores, pGenero);
        this.clientes.push(nuevoCliente);
        console.log("Se Agrego el Siguiente Cliente " + nuevoCliente.getNombre());
    };
    Libreria.prototype.getCliente = function (pNombre) {
        var i = 0;
        for (i; i < this.clientes.length; i++) {
            if (pNombre === this.clientes[i].getNombre()) {
                return this.clientes[i];
                break;
            }
        }
        if (i === 0) {
            throw new Error('No se encontro Nro Venta');
        }
        return this.clientes[i];
    };
    Libreria.prototype.agregarArticulo = function (pLibro) {
        this.libros.push(pLibro);
        console.log("Se Agrego el Siguiente Articulo " + pLibro.getTitulo());
    };
    Libreria.prototype.getArticulo = function (pTitulo) {
        var i = 0;
        try {
            for (i; i < this.clientes.length; i++) {
                if (pTitulo === this.libros[i].getTitulo()) {
                    return this.libros[i];
                    break;
                }
            }
            if (i === 0) {
                throw new Error('No se encontro Nro Venta');
            }
        }
        catch (error) {
            console.log("Historial de ARTICULOS vacio");
        }
        return this.libros[i];
    };
    Libreria.prototype.aumentarCantidadVentas = function () {
        this.CantidadVentas = this.CantidadVentas + 1;
        return this.CantidadVentas;
    };
    Libreria.prototype.calcularPrecioLibro = function (pDescuento, pPrecio) {
        if (pDescuento === 0) {
            return pPrecio;
        }
        else {
            return pPrecio - (pPrecio * pDescuento / 100);
        }
    };
    Libreria.prototype.ingresarVenta = function (pCliente, pLibro) {
        var nuevaVenta = new venta_1.Venta(this.aumentarCantidadVentas(), pCliente, pLibro);
        this.ventas.push(nuevaVenta);
        console.log("Se hizo la siguiente venta " + nuevaVenta.getVentaDetalleCompleto());
    };
    Libreria.prototype.eliminarVenta = function (pNroVenta) {
        var control = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            if (pNroVenta === this.ventas[i].getNumeroVenta()) {
                this.ventas.splice(i, 1);
                console.log("Se Elimino el siguiente Venta: " + pNroVenta);
                control = 1;
                break;
            }
        }
        if (control === 0) {
            throw new Error('No se encontro Nro Venta');
        }
    };
    Libreria.prototype.esFavoritoAutor = function (pCliente, pLibro) {
        var favorito = false;
        var autoresFav = pCliente.listarAutoresFavoritos();
        try {
            for (var i = 0; i < autoresFav.length; i++) {
                if (pLibro.getAutor() === autoresFav[i]) {
                    favorito = true;
                    break;
                }
            }
        }
        catch (error) {
            console.log("Autores Favoritos vacio");
        }
        return favorito;
    };
    Libreria.prototype.esFavoritoGenero = function (pCliente, pLibro) {
        var favorito = false;
        var generoFav = pCliente.listarGenerosFavoritos();
        try {
            for (var i = 0; i < generoFav.length; i++) {
                if (pLibro.getGenero() === generoFav[i]) {
                    favorito = true;
                    break;
                }
            }
        }
        catch (error) {
            console.log("Generos Favoritos vacio");
        }
        return favorito;
    };
    Libreria.prototype.buscarGeneroAutor = function (pCliente, pLibro) {
        var favorito = false;
        if (this.esFavoritoAutor(pCliente, pLibro) === true &&
            this.esFavoritoGenero(pCliente, pLibro) === true) {
            favorito = true;
        }
        return favorito;
    };
    Libreria.prototype.buscarLibroComprado = function (pCliente, pLibro) {
        var comprado = false;
        try {
            for (var i = 0; i < this.ventas.length; i++) {
                if (pLibro.getTitulo() === this.ventas[i].getLibro() && pCliente.getNombre() === this.ventas[i].getCliente()) {
                    comprado = true;
                }
            }
        }
        catch (error) {
            console.log("NO SE ENCONTRO LIBRO");
        }
        return comprado;
    };
    Libreria.prototype.getPrecioLibro = function (pCliente, pLibro) {
        return this.calcularPrecioLibro(pCliente.getDescuento(), pLibro.getPrecio());
    };
    return Libreria;
}());
exports.Libreria = Libreria;
