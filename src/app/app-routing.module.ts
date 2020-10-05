import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/private/inicio/inicio.component';
import { NuestraComponent } from './components/private/nuestra/nuestra.component';
import { ContactenosComponent } from './components/private/contactenos/contactenos.component';
import { RevisionComponent } from './components/private/revision/revision.component';
import { PortalComponent } from './components/private/portal/portal.component';
import { PreguntasComponent } from './components/private/preguntas/preguntas.component';
import { AgendaComponent } from './components/private/agenda/agenda.component';


const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Nuestra', component: NuestraComponent },
  { path: 'Contactenos', component: ContactenosComponent },
  { path: 'Revision', component: RevisionComponent },
  { path: 'Portal', component: PortalComponent },
  { path: 'Preguntas', component: PreguntasComponent },
  { path: 'Agenda', component: AgendaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' },
  { path: '', pathMatch: 'full', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
