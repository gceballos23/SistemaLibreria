import {Articulo} from "./articulo";
import {Persona} from "./persona";

export  class Revista extends Articulo{ 
    private numeroRevista : number;
    private anio : number;

    constructor(pTitulo : string, pAutor: Persona, pPrecio : number, pNumeroRevista : number, pAnio : number){
        super(pTitulo,pAutor,pPrecio);
        this.numeroRevista = pNumeroRevista;
        this.anio = pAnio;
    }

    public getNumeroRevista():number{
        return this.numeroRevista;
    }

    public setNumeroRevista(pNumeroRevista:number):void{
        this.numeroRevista = pNumeroRevista;
    }

    public getAnio():number{
        return this.anio;
    }

    public setAnio(pAnio:number):void{
        this.anio = pAnio;
    }
}