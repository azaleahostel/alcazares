import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/private/inicio/inicio.component';
import { NuestraComponent } from './components/private/nuestra/nuestra.component';
import { ContactenosComponent } from './components/private/contactenos/contactenos.component';
import { RevisionComponent } from './components/private/revision/revision.component';
import { PortalComponent } from './components/private/portal/portal.component';
import { PreguntasComponent } from './components/private/preguntas/preguntas.component';
import { AgendaComponent } from './components/private/agenda/agenda.component';
import { NavegacionComponent } from './components/shared/navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CarruselComponent } from './components/shared/carrusel/carrusel.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { BotoncontactoComponent } from './components/shared/botoncontacto/botoncontacto.component';
import { MaterialModule } from "./material/material.module";  
import { TarjetaserviciosComponent } from './components/shared/tarjetaservicios/tarjetaservicios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NuestraComponent,
    ContactenosComponent,
    RevisionComponent,
    PortalComponent,
    PreguntasComponent,
    AgendaComponent,
    NavegacionComponent,
    CarruselComponent,
    TarjetasComponent,
    BotoncontactoComponent,
    
    TarjetaserviciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
