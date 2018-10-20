import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'lamy-home'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'lamy-home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'shade',
                loadChildren: './al-star-shade/al-star-shade.module#AlStarShadeModule'
            },
            {
                path: 'lamy-chart',
                loadChildren: './lamy-chart/lamy-chart.module#LamyChartModule'
            },
            {
                path: 'paging',
                loadChildren: './lamy-pagination/lamy-pagination.module#LamyPaginationModule'
            },
            {
                path: 'custom',
                loadChildren: './lamy-upload/lamy-upload.module#LamyUploadModule'
            },
            {
                path: 'credit',
                loadChildren: './credit/credit.module#CreditModule'
            },
            {
                path: 'lamy-form',
                loadChildren: './lamy-form/lamy-form.module#LamyFormModule'
            }


            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
