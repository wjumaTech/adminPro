import { Component, Input, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css'
})
export class DonaComponent implements OnInit{

  @Input() title:string = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  
  @Input('data') data: number[] = [0,0,0]

  ngOnInit(): void {
  }


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [60, 55, 20] }
    ],
  };
  

}
