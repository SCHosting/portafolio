import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

    
   }

   private cargarInfo() {
        //Leer archivo Json

        this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;    
        }); 

   }

   private cargarEquipo(){

    this.http.get('https://angula-html-e4f12.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;    
      //console.log(resp);
    }); 

   }

}
