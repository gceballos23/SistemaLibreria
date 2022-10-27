"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pDni) {
        this.nombre = pNombre;
        this.dni = pDni;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    return Persona;
}());
exports.Persona = Persona;
