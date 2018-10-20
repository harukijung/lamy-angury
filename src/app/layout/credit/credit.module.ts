import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreditComponent } from './credit.component';

@NgModule({
  imports: [
    CommonModule,CreditRoutingModule
  ],
  declarations: [CreditComponent]
})
export class CreditModule { }
