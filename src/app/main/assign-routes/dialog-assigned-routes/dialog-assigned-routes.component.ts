import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-assigned-routes',
  templateUrl: './dialog-assigned-routes.component.html',
  styleUrls: ['./dialog-assigned-routes.component.scss']
})
export class DialogAssignedRoutesComponent implements OnInit {

  
  lat = 19.3066673;
  lng = -99.0571976;
  zoom = 6;

  ruta1 = [
    {
      vehiculo: 'vechiculo 1',
      puntoDeEntrega: '0',
      lat: 19.3066673	,
      lng: -99.0571976
    },
    {
      vehiculo: 'vechiculo 1',
      puntoDeEntrega: '1',
      lat: 19.3095010 	,
      lng: -99.1309870 
    },
    {
      vehiculo: 'vechiculo 1',
      puntoDeEntrega: '7',
      lat: 19.3072120 	,
      lng: -99.1327200 ,
    },
    {
      vehiculo: 'vechiculo 1',
      puntoDeEntrega: '0',
      lat: 19.3066673	,
      lng: -99.0571976
    }
  ];

  ruta2= [{
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '0',
    lat: 19.3066673	,
    lng: -99.0571976
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '8',
    lat: 19.3059470  	,
    lng: -99.1118000  
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '2',
    lat: 19.3004750  	,
    lng: -99.1246400  
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '4',
    lat: 19.3008220 	,
    lng: -99.1250070 
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '9',
    lat: 19.2883800  	,
    lng: -99.1235000  
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '5',
    lat: 19.2921550  	,
    lng: -99.1201000  
  },
  {
    vehiculo: 'vechiculo 2',
    puntoDeEntrega: '6',
    lat: 19.2902440  	,
    lng: -99.1117000  
  },
  {    vehiculo: 'vechiculo 2',
  puntoDeEntrega: '0',
  lat: 19.3066673	,
  lng: -99.0571976
}
];

  constructor() {  }

  ngOnInit(): void {

    this.trackingRoute();
  }

  trackingRoute(){
    console.log(this.ruta1);
    console.log(this.ruta2)
  }

}
