import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule
  ],
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] }
    ],
  };

  

}
