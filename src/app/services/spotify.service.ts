import { Injectable } from "@angular/core";
import { Http, Headers }       from "@angular/http";
//Importamos el módulo http para poder hacer las peticiones
//Importamos el módulo del header para poder mandar las autorización del token
//que requiere el spotify para que la API pueda devolver el resultado de la peteción
import 'rxjs/add/operator/map';
//Para poder mapear una http response a un objeto

@Injectable(

)

export class SpotifyService{
    
    artists:any[] = [];
    artist:any;
    urlBusqueda:string = "https://api.spotify.com/v1/search";
    urlArtist:string = "https://api.spotify.com/v1/artists";

    constructor(private _http:Http){
        
    }

    getArtists( termino ){
        //El header es para poder enviar el permiso
        let headers = new Headers();
        //Creamos la autorización 
        headers.append('authorization', 'Bearer BQBnd1BZJ8JX44TopOdLKsy9ux9F2-QsoEd72rKrBmcE5V04ZDw1cVBMNpuPRjuV246FyGhO4sUFe1wyQPK5mQ');
        
        //Acá preparamos la consulta que traemos de la página de spotify con el termino el criterio de la busqueda
        let query = `?q=${termino}&type=artist`;
        //Y completamos en la url completa donde haremos la petición.
        let url = this.urlBusqueda + query;
        //Usamos el módulo http y su metodo get para hacer la peticion pero con el headers
        //para poder tener los permisos y usamos el método map para crear el objeto
        /*return this._http.get( url, { headers } )
                .map( res => {
                     this.artists = res.json().artists.items;
                    //return res.json().artists.items;
                });*/

        return this._http.get(url , { headers } ).map( res => {
            this.artists = res.json().artists.items
        });

    }


    getArtist( termino:string ){
        let query = `/${termino}`;
        let url = this.urlArtist + query;
        //El header es para poder enviar el permiso
        let headers = new Headers();
        //Creamos la autorización 
        headers.append('authorization', 'Bearer BQAwtXk2VE0wUh0Owu1mMC3vqy_I3k_3pI2ZAS91odFmfwCayufCEG1cb92LNcqt6MhhIFK-C0dThWzHSI5kCg');
        
        return this._http.get( url, { headers } ).map( res => {
            console.log(res.json());
            return res.json();
        });
    }

    getTop( termino:string ){
        //El header es para poder enviar el permiso
        let headers = new Headers();
        //Creamos la autorización 
        headers.append('authorization', 'Bearer BQBnd1BZJ8JX44TopOdLKsy9ux9F2-QsoEd72rKrBmcE5V04ZDw1cVBMNpuPRjuV246FyGhO4sUFe1wyQPK5mQ');
        
        let query = `/${termino}/top-tracks?country=US`
        let url = this.urlArtist + query;
         return this._http.get(url, {headers}).map( res => {
            console.log(res.json().tracks);
            return res.json().tracks;
        });
    }

}

//Spotify token: BQBhCC8ucFzct5w-vRgszU8HyxCwO-qPndLbwOh2_gXDGr7c-_QTkZKob-2RB-bdMITpC62B-Tz2MSpggh_0xQ