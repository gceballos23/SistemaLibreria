"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libro = void 0;
var articulo_1 = require("./articulo");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pTitulo, pAutor, pPrecio, pPaginas, pGenero) {
        var _this = _super.call(this, pTitulo, pAutor, pPrecio) || this;
        _this.paginas = pPaginas;
        _this.genero = pGenero;
        _this.resumen = "";
        return _this;
    }
    Libro.prototype.getPaginas = function () {
        return this.paginas;
    };
    Libro.prototype.setPaginas = function (pPaginas) {
        this.paginas = pPaginas;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (pGenero) {
        this.genero = pGenero;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.setResumen = function (pResumen) {
        this.resumen = pResumen;
    };
    return Libro;
}(articulo_1.Articulo));
exports.Libro = Libro;
