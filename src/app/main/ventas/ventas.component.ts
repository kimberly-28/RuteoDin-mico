import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DialogDetailsSalesComponent } from './dialog-details-sales/dialog-details-sales.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  public lineChartData1: ChartDataSets[] = [
    
    { data: [ 0, 3000, 4500, 5000, 6000], label: 'Ventas Planeadas' },
    { data: [0, 3000, 4500, 8500, 10200], label: 'Ventas Ejecutadas', yAxisID: 'y-axis-1' },
  ];

  public lineChartData2: ChartDataSets[] = [
    
    { data: [  0, 2500, 3000, 5800, 6500], label: 'Ventas Planeadas' },
    { data: [0, 2000, 3000, 4500, 6100], label: 'Ventas Ejecutadas', yAxisID: 'y-axis-1' },
  ];

  
  public lineChartData3: ChartDataSets[] = [
    
    { data: [ 0, 10500, 13800, 15500, 20500], label: 'Ventas Planeadas' },
    { data: [ 0, 8000, 10000, 15000, 20000], label: 'Ventas Ejecutadas', yAxisID: 'y-axis-1' },
  ];

  
  public lineChartData4: ChartDataSets[] = [
    
    { data: [0, 20500, 30500, 35800, 46100], label: 'Ventas Planeadas' },
    { data: [0, 20500, 30500, 35800, 46100], label: 'Ventas Ejecutadas', yAxisID: 'y-axis-1' },
  ];
  

  public lineChartLabels: Label[] = ['7 ELEVEN COAPA', 'IND. ALIMENTICIAS', 'MINI SUPER ANGEL II', 'DULCERIA MATEO', 'CREMERIA CESAR', ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'green',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      // backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgba(22, 179, 243 )',
      pointBackgroundColor:  'rgba(230, 230, 23)',
      pointBorderColor: 'rgba(230, 230, 23)',
      pointHoverBackgroundColor: 'rgba(230, 230, 23)',
      pointHoverBorderColor: 'rgba(63, 207, 65)',
    },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    { // red
      // backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'rgba(63, 207, 65)',
      pointBackgroundColor: 'rgba(63, 207, 65)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  constructor (public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogDetailsSalesComponent);
  }
  
}
