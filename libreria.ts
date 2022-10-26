import {Articulo} from "./articulo";
import {Cliente} from "./cliente";
import { Libro } from "./libro";
import {Venta} from "./venta";

export  class Libreria {
    private CantidadVentas : number;
    private clientes : Cliente[];
    private libros : Articulo[];
    private ventas  : Venta[];

    constructor(pClientes : Cliente[], pLibros: Articulo[]){
        this.clientes = pClientes;
        this.libros = pLibros;
        this.CantidadVentas = 0;
    }

    private AumentarCantidadVentas():number{
        this.CantidadVentas = this.CantidadVentas + 1;
        return this.CantidadVentas;
    }

    public ingresarVenta(pCliente: Cliente, pLibro : Articulo):void{
        let nuevaVenta = new Venta(this.CantidadVentas,pCliente,pLibro);
        this.ventas.push(nuevaVenta);
        console.log("Se hizo la siguiente venta " + nuevaVenta.getVentaDetalleCompleto());
    }

    public eliminarVenta(pNroVenta: number):void{

    }

    public buscarGenero(pCliente : Cliente):void{

    }

    private EncontroGenero(pCliente : Cliente, pLibro : Libro): boolean{
        return false;

    }

    private EncontroAutor(pCliente : Cliente, pLibro : Libro) : boolean {
        return false;
    }

    public BuscarGeneroAutor(pCliente : Cliente): void{

    }

    BuscarLibrosComprados(pCliente : Cliente) : string[]{
        return ["",""];
    }
}