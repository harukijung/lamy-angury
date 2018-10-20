import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LamyFormRoutingModule} from './lamy-form-routing.module';
import { LamyFormComponent } from './lamy-form.component';

import {
   MatRadioModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,LamyFormRoutingModule,MatRadioModule,FlexLayoutModule,FormModule,ReactiveFormsModule
  ],
  declarations: [LamyFormComponent]
})
export class LamyFormModule { }
