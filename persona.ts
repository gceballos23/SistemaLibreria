export class Persona {
    protected nombre: string;
    protected dni: number;

    constructor(pNombre: string, pDni: number) {
        this.nombre = pNombre;
        this.dni = pDni;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(pDni: number): void {
        this.dni = pDni;
    }
}