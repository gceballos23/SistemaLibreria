import {Persona} from "./persona";

export  class Articulo { 
    protected titulo : string;
    protected autor : Persona;
    protected precio : number;
    
    constructor(pTitulo : string, pAutor: Persona, pPrecio : number){
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.precio = pPrecio;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public setTitulo(pTitulo:string):void{
        this.titulo = pTitulo;
    }

    public getAutor():Persona{
        return this.autor;
    }

    public setAutor(pAutor:Persona):void{
        this.autor = pAutor;
    }

    public getPrecio():number{
        return this.precio;
    }

    public setPrecio(pPrecio:number):void{
        this.precio = pPrecio;
    }
}