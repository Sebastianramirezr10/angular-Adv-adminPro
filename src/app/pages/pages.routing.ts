import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [

     {path: 'dashboard', component: PagesComponent,
      children: [
        {path: '', component: DashboardComponent },
        {path: 'progress', component: ProgressComponent },
        {path: 'grafica1', component: Grafica1Component },
        {path: 'account-settings', component: AccountSettingsComponent },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
