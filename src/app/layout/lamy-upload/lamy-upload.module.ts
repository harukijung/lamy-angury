import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {LamyUploadRoutingModule} from './lamy-upload-routing.module';
import {LamyUploadComponent} from './lamy-upload.component';

@NgModule({
  imports: [
    CommonModule,LamyUploadRoutingModule
  ],
  declarations: [LamyUploadComponent]
})
export class LamyUploadModule { }
