import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


const routes: Routes = [
	{
		path: '', children: [
			{ path: '', component: LogInComponent },
			{ path: 'nuevo', component: RegisterComponent },
			{ path: 'recuperar', component: ForgotPassComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
