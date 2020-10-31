import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,

  ],
  exports: [

    LoginComponent,
    RegisterComponent,
    RouterModule,
    FormsModule
  ],
  imports: [
    CommonModule,
      ]
})
export class AuthModule { }
