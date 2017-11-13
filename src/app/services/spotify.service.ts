import { Injectable } from "@angular/core";
import { Http, Headers }       from "@angular/http";
//Importamos el módulo http para poder hacer las peticiones
import 'rxjs/add/operator/map';
//Para poder mapear una http response a un objeto

@Injectable(

)

export class SpotifyService{
    
    artists:any[] = [];
    urlBusqueda:string = "https://api.spotify.com/v1/search";
    urlArtist:string = "https://api.spotify.com/v1/artists";

    constructor(private _http:Http){
        
    }

    getArtists( termino ){
        let headers = new Headers();
        headers.append('authorization', 'Bearer BQDOLWIIiVAUEJtFGpTaNkJHNwrh6EZbTWIkxC_HyyvytS4_y4cbkzse4dKpa4Wi5_Dazvidd31TqkGOthc-xQ');
       
        let query = `?q=${termino}&type=artist`;
        let url = this.urlBusqueda + query;
        
        return this._http.get( url, {headers} )
                .map( res => {
                     this.artists = res.json().artists.items;
            //return res.json().artists.items;
                 });

    }


}

//Spotify token: BQBhCC8ucFzct5w-vRgszU8HyxCwO-qPndLbwOh2_gXDGr7c-_QTkZKob-2RB-bdMITpC62B-Tz2MSpggh_0xQ