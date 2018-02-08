import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent {
    public nombre: string;
    public mejor_juego: string;
    public mejor_juego_retro: string;
    public mostrar_retro: boolean;
    public color: string;
    public year: number;
    public videojuegos: Array<string>;

    constructor() {
        this.nombre = 'Videojuegos 2018';
        this.mejor_juego = 'Monster Hunter World';
        this.mejor_juego_retro = 'Super Mario Bros';
        this.mostrar_retro = true;
        this.color = 'yellow';
        this.year = 2018;
        this.videojuegos = [
            'Los Sims 4',
            'The Witcher 3',
            'Call of Duty WW2',
            'Battlefield 1',
            'Monster Hunter World',
            'Player Unknows Battlegrounds'
        ];
    }
}
