import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent],
  imports: [FormsModule, CommonModule,RouterModule],
  providers: [],
  exports: [UserComponent,LoginComponent,RegisterComponent],
})
export class UserModule {}
