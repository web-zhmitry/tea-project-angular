import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, Header, Footer],
  exports: [CommonModule, RouterModule, FormsModule, Header, Footer],
})
export class SharedModule {}
