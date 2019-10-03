import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './nucleo/log-in/log-in.component';
import { HeaderComponent } from './nucleo/header/header.component';
import { NavibarComponent } from './nucleo/navibar/navibar.component';
import { ForgotPassComponent } from './nucleo/forgot-pass/forgot-pass.component';
import { InexistentUrlComponent } from './nucleo/inexistent-url/inexistent-url.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    NavibarComponent,
    ForgotPassComponent,
    InexistentUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
