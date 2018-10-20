import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlStarShadeComponent } from './al-star-shade.component';

const routes: Routes = [
    {
        path: '',
        component: AlStarShadeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlStarShadeRoutingModule {}
