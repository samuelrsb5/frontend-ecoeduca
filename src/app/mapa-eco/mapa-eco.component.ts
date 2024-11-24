import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mapa-eco',
    templateUrl: './mapa-eco.component.html',
    styleUrl: './mapa-eco.component.css',
    standalone: false
})
export class MapaEcoComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: -8.0476, lng: -34.8770 }; // Exemplo: Recife
  zoom = 12;
  markers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://seuprojeto.com/api/locais_coleta.php')
      .subscribe(locais => {
        this.markers = locais.map(local => ({
          position: { lat: local.latitude, lng: local.longitude },
          title: local.nome,
          info: local.descricao
        }));
      });
  }
}
