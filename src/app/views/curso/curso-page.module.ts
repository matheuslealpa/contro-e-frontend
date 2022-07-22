import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoPageRoutingModule } from './curso-page-routing.module';
import { CursoPageComponent } from './curso-page.component';
import { CursoListComponent } from './curso-list/curso-list.component';


@NgModule({
  declarations: [
    CursoPageComponent,
    CursoListComponent
  ],
  imports: [
    CommonModule,
    CursoPageRoutingModule
  ]
})
export class CursoPageModule { }
