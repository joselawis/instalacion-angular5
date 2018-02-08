import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `
        <h2>Componente de {{nombre}}</h2>
        <h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
        <h3 [style.background]="color" 
            *ngIf="mostrar_retro">El mejor juego retro es: {{mejor_juego_retro}}</h3>
        <h2>Listado de videojuegos</h2>
        <ul>
            <li *ngFor = "let game of videojuegos">{{game}}</li>
        </ul>
            `
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