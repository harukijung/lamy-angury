import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lamy-chart',
  templateUrl: './lamy-chart.component.html',
  styleUrls: ['./lamy-chart.component.scss']
})
export class LamyChartComponent implements OnInit {
 // bar chart
 public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = ['EF', 'F', 'M', 'B', 'Calligraphy 1.1', 
'Calligraphy 1.5', 'Calligraphy 1.9','A'];
public barChartType: string = 'bar';
public barChartLegend: boolean = true;

public barChartData: any[] = [
  { data: [0.4, 0.5, 0.7, 0.9, 1.1, 1.5, 1.9,0.7], label: 'Standard Nib' },
 
];

// Doughnut
public doughnutChartLabels: string[] = ['Other', 'Parker', 'Sheaffer','Mont Blanc','Waterman',
'Pilot','Pelikan','Sailor','Lamy','...'];
public doughnutChartData: number[] = [49, 10.9, 5.6,4.5,4.5, 3.9, 3.4, 2, 2, 20];
public doughnutChartType: string = 'doughnut';

// Radar
public radarChartLabels: string[] = [
  'Eating',
  'Drinking',
  'Sleeping',
  'Designing',
  'Coding',
  'Cycling',
  'Running'
];
public radarChartData: any = [
  { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
public radarChartType: string = 'radar';

// Pie
public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: string = 'pie';

// PolarArea
public polarAreaChartLabels: string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail Sales',
  'Telesales',
  'Corporate Sales'
];
public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
public polarAreaLegend: boolean = true;

public polarAreaChartType: string = 'polarArea';

// lineChart
public lineChartData: Array<any> = [
  { data: [2850, 2850, 2950, 3000, 3800, 1500, 4000,1100,2400,1100,950,1100] ,label: 'Price' },
  
];
public lineChartLabels: Array<any> = [
  '2006-Blue Red',
  '2008-Rasberry',
  '2009-Orange',
  '2010-Coffee',
  '2011-Aquamarine',
  '2012-Apple Green',
  '2013-Ruby Red',
  '2014-Blue Green',
  '2015-Copper Orange',
  '2016-Dark Lilac',
  '2017-Petrol Blue',
  '2018-Vibrant Pink'
];
public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
 
];
public lineChartLegend: boolean = true;
public lineChartType: string = 'line';

// events
public chartClicked(e: any): void {
  // console.log(e);
}

public chartHovered(e: any): void {
  // console.log(e);
}

public randomize(): void {
  // Only Change 3 values
  const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
  ];
  const clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
}
constructor() {}

ngOnInit() {}
}
