import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import {LamyPaginationRoutingModule} from './lamy-pagination-routing.module';
import {LamyPaginationComponent} from './lamy-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    LamyPaginationRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  declarations: [LamyPaginationComponent]
})
export class LamyPaginationModule { }
