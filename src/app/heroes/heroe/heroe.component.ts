import { Component } from "@angular/core";



@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre : string = 'CapitanAmerica';
    edad   : number = 33;

    get nombreCapitalizado () {

        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void{

        this.nombre = 'Naruto';

    }

    cambiarEdad(): void {

        this.edad = 20;

    }

}