import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamyFormComponent } from './lamy-form.component';

const routes: Routes = [
    {
        path: '',
        component: LamyFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LamyFormRoutingModule { }
