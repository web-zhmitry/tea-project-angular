import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Product } from './pages/product/product';
import { Order } from './pages/order/order';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'product/:id', component: Product },
  { path: 'order', component: Order },
  { path: '**', redirectTo: '' },
];
