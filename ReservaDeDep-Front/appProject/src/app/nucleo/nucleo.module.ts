import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { HomeComponent } from './home/home.component';

import { InexistentUrlComponent } from './inexistent-url/inexistent-url.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		HomeComponent,
		LogInComponent,
		ForgotPassComponent,
		RegisterComponent,
		InexistentUrlComponent, HeaderComponent],
	imports: [
		CommonModule,
		NucleoRoutingModule,
		FormsModule
	],
	exports: [
		InexistentUrlComponent,
		HeaderComponent,
	]
})
export class NucleoModule { }
