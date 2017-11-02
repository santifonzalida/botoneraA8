import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from "./app.routes";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HomeComponent } from "./components/home/home.component";
import { EstadisticasComponent } from "./components/estadisticas/estadisticas.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
