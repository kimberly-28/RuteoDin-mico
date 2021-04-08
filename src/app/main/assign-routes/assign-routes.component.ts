import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAssignedRoutesComponent } from './dialog-assigned-routes/dialog-assigned-routes.component';


@Component({
  selector: 'app-assign-routes',
  templateUrl: './assign-routes.component.html',
  styleUrls: ['./assign-routes.component.scss']
})
export class AssignRoutesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogAssignedRoutesComponent);
  }

  ngOnInit(): void {
  }

}
