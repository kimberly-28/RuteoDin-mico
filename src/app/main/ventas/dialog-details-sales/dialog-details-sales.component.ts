import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-details-sales',
  templateUrl: './dialog-details-sales.component.html',
  styleUrls: ['./dialog-details-sales.component.scss']
})
export class DialogDetailsSalesComponent implements OnInit {

  lat = 23.8519757;
  lng = -103.0177432;
  zoom = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
