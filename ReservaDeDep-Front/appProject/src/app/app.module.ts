import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NucleoModule } from './nucleo/nucleo.module';
import { FormsModule } from '@angular/forms';
import { BuildingsModule } from './buildings/buildings.module';
import { TenantsModule } from './tenants/tenants.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NucleoModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
