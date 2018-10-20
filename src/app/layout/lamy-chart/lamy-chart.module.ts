import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { LamyChartRoutingModule } from './lamy-chart-routing.module';
import { LamyChartComponent } from './lamy-chart.component';

@NgModule({
  imports: [
    CommonModule,
    LamyChartRoutingModule,
    Ng2Charts,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [LamyChartComponent]
})
export class LamyChartModule { }
