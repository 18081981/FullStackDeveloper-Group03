import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NucleoModule } from 'app/nucleo/nucleo.module';
import { CursosModule } from 'app/cursos/cursos.module';
import { AlumnosModule } from 'app/alumnos/alumnos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule,
    CursosModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
