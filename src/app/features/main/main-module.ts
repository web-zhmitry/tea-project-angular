import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Home } from './home/home';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, SharedModule, Home],
})
export class MainModule {}
