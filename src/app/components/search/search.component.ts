import { Component, OnInit } from '@angular/core';
import { SpotifyService }    from '../../services/spotify.service';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html'
})

export class SearchComponent implements OnInit{

    termino:string = "";

    constructor(private _spotifyService:SpotifyService){

    }

    ngOnInit(){
    }

    buscarArtista(){
        this._spotifyService.getArtists( this.termino ).subscribe( data => {
            console.log(data);
        });
    }

}