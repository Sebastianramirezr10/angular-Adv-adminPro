import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NoPageFoundComponent } from './no-pagefound/no-pagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';





const routes: Routes = [
    // todas las rutas del dashboard estaran en  './pages/pages.routing.ts'
    // todas las rutas de login y registro estaran en  './auth/auth.routing.ts'

    {path: '', redirectTo: 'dashboard' , pathMatch: 'full' },
    {path: '**', component: NoPageFoundComponent }
];


@NgModule({
    imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
  })
export class AppRoutingModule {}



