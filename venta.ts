import {Articulo} from "./articulo";
import {Cliente} from "./cliente";

export  class Venta { 
    private numeroVenta : number;
    private cliente : Cliente;
    private libro : Articulo;
    private precio  : number;

    constructor(pNumeroVenta : number, pCliente: Cliente, pLibro: Articulo){
        this.numeroVenta = pNumeroVenta;
        this.cliente = pCliente;
        this.libro = pLibro;
        if (pCliente.getDescuento() === 0){
            this.precio = pLibro.getPrecio()
        }else{
            this.precio = pLibro.getPrecio() / pCliente.getDescuento();
        }
     
    }

    public getVenta():void{
        console.log(this.numeroVenta + " " + this.cliente.getNombre() +" "+ this.libro.getTitulo()+ " " + 
                    this.precio)
    }

    public getVentaDetalleCompleto():string{
        return this.numeroVenta + " " + this.cliente.getNombre() +" "+ this.libro.getTitulo()+ " " + 
                    this.precio
    }

    public getNumeroVenta():number{
        return this.numeroVenta;
    }

    public getCliente():string{
        return this.cliente.getNombre();
    }

    public getLibro():string{
        return this.libro.getTitulo();
    }

    public getPrecio():number{
        return this.precio;
    }


}