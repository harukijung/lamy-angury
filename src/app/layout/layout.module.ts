import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';



// must manual remove , else will error not know import material or library
//import { LamyFormComponent } from './lamy-form/lamy-form.component';
//import { HomeComponent } from './home/home.component';
//import { CreditComponent } from './credit/credit.component';
//import { LamyUploadComponent } from './lamy-upload/lamy-upload.component';
//import { LamyPaginationComponent } from './lamy-pagination/lamy-pagination.component';
//import { LamyChartComponent } from './lamy-chart/lamy-chart.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, 
        SidebarComponent]
})
export class LayoutModule {}
