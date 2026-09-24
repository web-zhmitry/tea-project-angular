import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';
import { Order } from './order/order';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrderRoutingModule, SharedModule, ReactiveFormsModule, Order],
})
export class OrderModule {}
