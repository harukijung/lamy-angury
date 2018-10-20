import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamyChartComponent } from './lamy-chart.component';

const routes: Routes = [
    {
        path: '',
        component: LamyChartComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LamyChartRoutingModule {}