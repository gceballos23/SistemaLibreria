"use strict";
exports.__esModule = true;
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(pTitulo, pAutor, pPrecio) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Articulo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Articulo.prototype.setTitulo = function (pTitulo) {
        this.titulo = pTitulo;
    };
    Articulo.prototype.getAutor = function () {
        return this.autor;
    };
    Articulo.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Articulo.prototype.getPrecio = function () {
        return this.precio;
    };
    Articulo.prototype.setPrecio = function (pPrecio) {
        this.precio = pPrecio;
    };
    return Articulo;
}());
exports.Articulo = Articulo;
