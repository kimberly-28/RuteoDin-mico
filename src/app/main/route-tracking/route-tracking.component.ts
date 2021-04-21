import { Component, OnInit } from '@angular/core';7

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-route-tracking',
  templateUrl: './route-tracking.component.html',
  styleUrls: ['./route-tracking.component.scss']
})
export class RouteTrackingComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Tlahuac'},
    {value: 'pizza-1', viewValue: 'Guanajuato'},
    {value: 'tacos-2', viewValue: 'Queretaro'},
  ];
  
  lat = 23.8519757;
  lng = -103.0177432;
  zoom = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
