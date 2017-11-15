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
    urlBusqueda:string = "https://api.spotify.com/v1/search";
    urlArtist:string = "https://api.spotify.com/v1/artists";

    constructor(private _http:Http){
        
    }

    getArtists( termino ){
        //El header es para poder enviar el permiso
        let headers = new Headers();
        //Creamos la autorización 
        headers.append('authorization', 'Bearer BQDadp-icjJkavZVlHsB2VpzsCoVey5K5SpceJYMfgsdhgok8IIWTN5GzF_VEBd7ot5c0FnakXF9zgNiDWrtvQ');
        
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


}

//Spotify token: BQBhCC8ucFzct5w-vRgszU8HyxCwO-qPndLbwOh2_gXDGr7c-_QTkZKob-2RB-bdMITpC62B-Tz2MSpggh_0xQ