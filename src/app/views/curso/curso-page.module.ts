import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoPageRoutingModule } from './curso-page-routing.module';
import { CursoPageComponent } from './curso-page.component';


@NgModule({
  declarations: [
    CursoPageComponent,
  ],
  imports: [
    CommonModule,
    CursoPageRoutingModule
  ]
})
export class CursoPageModule { }
