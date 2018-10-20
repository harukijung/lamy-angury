import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamyUploadComponent } from './lamy-upload.component';

const routes: Routes = [
    {
        path: '',
        component: LamyUploadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LamyUploadRoutingModule { }
