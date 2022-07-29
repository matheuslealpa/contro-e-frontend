import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoPageComponent } from './endereco-page.component';

const routes: Routes = [{ path: '', component: EnderecoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoPageRoutingModule { }
