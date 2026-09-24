import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Product } from './product/product';

const routes: Routes = [
  { path: '', component: Catalog },
  { path: ':id', component: Product },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
