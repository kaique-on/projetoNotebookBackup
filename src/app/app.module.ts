import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MainComponent } from './componentes/main/main.component';
import { NotaComponent } from './componentes/nota/nota.component';
import { NovaNotaComponent } from './componentes/nova-nota/nova-nota.component';
import { CriarEditarNotaComponent } from './componentes/criar-editar-nota/criar-editar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    NotaComponent,
    NovaNotaComponent,
    CriarEditarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
