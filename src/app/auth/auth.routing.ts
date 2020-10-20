import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoPageFoundComponent } from '../no-pagefound/no-pagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [

  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
