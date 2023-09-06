import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrderRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class OrderModule { }
