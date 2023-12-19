import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { IncluirComponent } from '../../incluir/incluir.component';
import { ConsultarComponent } from '../../consultar/consultar.component';
import { ActualizarComponent } from '../../actualizar/actualizar.component';
import { AnularComponent } from '../../anular/anular.component';
import { TasainteresComponent } from '../../tasainteres/tasainteres.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'incluir', component: IncluirComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'anular', component: AnularComponent },
  { path: 'tasainteres', component: TasainteresComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
