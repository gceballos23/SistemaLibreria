import { Articulo } from "./articulo";
import { Persona } from "./persona";

export class Libro extends Articulo {
    private paginas: number;
    private resumen: string;
    private genero: string;

    constructor(pTitulo: string, pAutor: Persona, pPrecio: number, pPaginas: number, pGenero: string) {
        super(pTitulo, pAutor, pPrecio);
        this.paginas = pPaginas;
        this.genero = pGenero;
        this.resumen = "";
    }

    public getPaginas(): number {
        return this.paginas;
    }

    public setPaginas(pPaginas: number): void {
        this.paginas = pPaginas;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(pGenero: string): void {
        this.genero = pGenero;
    }

    public getResumen(): string {
        return this.resumen;
    }

    public setResumen(pResumen: string): void {
        this.resumen = pResumen;
    }
}