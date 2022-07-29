import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoPageRoutingModule } from './endereco-page-routing.module';
import { EnderecoPageComponent } from './endereco-page.component';


@NgModule({
  declarations: [
    EnderecoPageComponent
  ],
  imports: [
    CommonModule,
    EnderecoPageRoutingModule
  ]
})
export class EnderecoPageModule { }
