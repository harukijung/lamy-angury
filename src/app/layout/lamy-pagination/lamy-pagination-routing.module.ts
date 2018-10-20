import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamyPaginationComponent } from './lamy-pagination.component';

const routes: Routes = [
    {
        path: '',
        component: LamyPaginationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LamyPaginationRoutingModule { }
