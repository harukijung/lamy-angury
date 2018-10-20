import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlStarShadeRoutingModule } from './al-star-shade-routing.module';
import { AlStarShadeComponent } from './al-star-shade.component';

@NgModule({
  imports: [
    CommonModule,AlStarShadeRoutingModule
  ],
  declarations: [AlStarShadeComponent]
})

export class AlStarShadeModule { }

