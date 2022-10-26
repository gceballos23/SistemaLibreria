import {Persona} from "./persona";

export  class Cliente extends Persona{
    private direccion : string;
    private descuento : number;
    private autoresFavoritos: Persona[];
    private generoFavoritos: string[];
    
    constructor(pNombre : string, pDni : number, pdireccion : string, pdescuento : number){ 
        super(pNombre,pDni);
        this.direccion = pdireccion;
        this.descuento = pdescuento;
    }

    public getDireccion():string{
        return this.direccion;
    }

    public setDireccion(pDireccion:string):void{
        this.direccion = pDireccion;
    }

    public getDescuento():number{
        return this.descuento;
    }

    public setDescuento(pOpcion:number):void{
        switch(pOpcion) {
            case 1:
              this.descuento = 10;
              break;
            case 2:
                this.descuento = 20;
              break;
            case 3:
                this.descuento = 30;
               break;  
            default:
                this.descuento = 0;
        }
    }

    public listarAutoresFavoritos() {
        return this.autoresFavoritos;
        
    }

    public agregarAutorFavorito(pAutor: Persona):void {
        this.autoresFavoritos.push(pAutor);
        console.log("Se agrego el siguiente Autor " + pAutor.getNombre());
    }

    public eliminarAutorFavorito(pAutor: Persona):void{
        let control : number = 0;
        try{ 
            for(let i:number=0; i<this.autoresFavoritos.length; i++){
                if(pAutor.getNombre() === this.autoresFavoritos[i].getNombre()){
                    this.autoresFavoritos.splice(i,1);
                    console.log("Se Elimino el siguiente Autor: " + pAutor.getNombre());
                    control = 1;
                    break;
                }

            }
            if (control === 0){
                throw new Error('No se encontro Autor');
            }
            
        }catch(error){
            console.log("Lista de Autores Favoritos vacio");
        }
    
    }
    
    public listarGenerosFavoritos() {
        return this.generoFavoritos;
        
    }

    public agregarGeneroFavorito(pGenero: string):void {
        this.generoFavoritos.push(pGenero);
        console.log("Se agrego el siguiente Genero: " + pGenero);
    }

    public eliminarGeneroFavorito(pGenero: string):void{
        let control : number = 0;
        try{ 
            for(let i:number=0; i<this.generoFavoritos.length; i++){
                if(pGenero === this.generoFavoritos[i]){
                    this.generoFavoritos.splice(i,1);
                    console.log("Se Elimino el siguiente Genero: " + pGenero);
                    control = 1;
                    break;
                }

            }
            if (control === 0){
                throw new Error('No se encontro Genero');
            }
            
        }catch(error){
            console.log("Lista de Generos Favoritos vacio");
        }
    
    }
}