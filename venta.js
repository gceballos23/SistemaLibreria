"use strict";
exports.__esModule = true;
exports.Venta = void 0;
var Venta = /** @class */ (function () {
    function Venta(pNumeroVenta, pCliente, pLibro) {
        this.numeroVenta = pNumeroVenta;
        this.cliente = pCliente;
        this.libro = pLibro;
        if (pCliente.getDescuento() === 0) {
            this.precio = pLibro.getPrecio();
        }
        else {
            this.precio = pLibro.getPrecio() - (pLibro.getPrecio() * pCliente.getDescuento() / 100);
        }
    }
    Venta.prototype.getVenta = function () {
        console.log(this.numeroVenta + " " + this.cliente.getNombre() + " " + this.libro.getTitulo() + " " +
            this.precio);
    };
    Venta.prototype.getVentaDetalleCompleto = function () {
        return this.numeroVenta + " " + this.cliente.getNombre() + " " + this.libro.getTitulo() + " " +
            this.precio;
    };
    Venta.prototype.getNumeroVenta = function () {
        return this.numeroVenta;
    };
    Venta.prototype.getCliente = function () {
        return this.cliente.getNombre();
    };
    Venta.prototype.getLibro = function () {
        return this.libro.getTitulo();
    };
    Venta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Venta;
}());
exports.Venta = Venta;
