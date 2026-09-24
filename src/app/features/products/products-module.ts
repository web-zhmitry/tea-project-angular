import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Catalog } from './catalog/catalog';
import { Product } from './product/product';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, Catalog, Product],
})
export class ProductsModule {}
