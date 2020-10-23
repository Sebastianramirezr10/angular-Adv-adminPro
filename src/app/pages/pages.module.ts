import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';




import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { DonaComponent } from '../components/dona/dona.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    DonaComponent

  ],

  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,


  ]
})
export class PagesModule { }
