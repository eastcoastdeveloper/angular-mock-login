import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoginRoutingModule,
  loginRoutingComponents,
} from './login-routing.module';

@NgModule({
  declarations: [loginRoutingComponents],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
