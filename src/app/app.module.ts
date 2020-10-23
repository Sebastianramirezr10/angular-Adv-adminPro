import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MODULOS
import {AppRoutingModule} from './app-routing.module';
import { PagesModule } from './pages/pages.module';

// COMPONENTES
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { NoPageFoundComponent } from './no-pagefound/no-pagefound.component';





@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
