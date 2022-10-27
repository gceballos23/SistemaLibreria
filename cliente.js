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
exports.Cliente = void 0;
var persona_1 = require("./persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(pNombre, pDni, pdireccion, pdescuento, pAutores, pGenero) {
        var _this = _super.call(this, pNombre, pDni) || this;
        _this.direccion = pdireccion;
        switch (pdescuento) {
            case 1:
                _this.descuento = 10;
                break;
            case 2:
                _this.descuento = 15;
                break;
            case 3:
                _this.descuento = 30;
                break;
            default:
                _this.descuento = 0;
        }
        _this.autoresFavoritos = pAutores;
        _this.generoFavoritos = pGenero;
        return _this;
    }
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.setDescuento = function (pOpcion) {
        switch (pOpcion) {
            case 1:
                this.descuento = 10;
                break;
            case 2:
                this.descuento = 15;
                break;
            case 3:
                this.descuento = 30;
                break;
            default:
                this.descuento = 0;
        }
    };
    Cliente.prototype.listarAutoresFavoritos = function () {
        return this.autoresFavoritos;
    };
    Cliente.prototype.agregarAutorFavorito = function (pAutor) {
        this.autoresFavoritos.push(pAutor);
        console.log("Se agrego el siguiente Autor " + pAutor.getNombre());
    };
    Cliente.prototype.eliminarAutorFavorito = function (pAutor) {
        var control = 0;
        try {
            for (var i = 0; i < this.autoresFavoritos.length; i++) {
                if (pAutor.getNombre() === this.autoresFavoritos[i].getNombre()) {
                    this.autoresFavoritos.splice(i, 1);
                    console.log("Se Elimino el siguiente Autor: " + pAutor.getNombre());
                    control = 1;
                    break;
                }
            }
            if (control === 0) {
                throw new Error('No se encontro Autor');
            }
        }
        catch (error) {
            console.log("Lista de Autores Favoritos vacio");
        }
    };
    Cliente.prototype.listarGenerosFavoritos = function () {
        return this.generoFavoritos;
    };
    Cliente.prototype.agregarGeneroFavorito = function (pGenero) {
        this.generoFavoritos.push(pGenero);
        console.log("Se agrego el siguiente Genero: " + pGenero);
    };
    Cliente.prototype.eliminarGeneroFavorito = function (pGenero) {
        var control = 0;
        try {
            for (var i = 0; i < this.generoFavoritos.length; i++) {
                if (pGenero === this.generoFavoritos[i]) {
                    this.generoFavoritos.splice(i, 1);
                    console.log("Se Elimino el siguiente Genero: " + pGenero);
                    control = 1;
                    break;
                }
            }
            if (control === 0) {
                throw new Error('No se encontro Genero');
            }
        }
        catch (error) {
            console.log("Lista de Generos Favoritos vacio");
        }
    };
    return Cliente;
}(persona_1.Persona));
exports.Cliente = Cliente;
