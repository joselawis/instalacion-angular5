import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent{
    public nombre = 'Videojuegos 2018';
    public mejor_juego = 'Monster Hunter World';
    public mejor_juego_retro = 'Super Mario Bros 3';
    public mostrar_retro = true;
    public color = "yellow";

    public videojuegos = [
        'Los Sims 4',
        'The Witcher 3',
        'Call of Duty WW2',
        'Battlefield 1'
    ]
}