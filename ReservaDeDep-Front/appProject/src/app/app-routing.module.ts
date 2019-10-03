import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LogInComponent } from './nucleo/log-in/log-in.component';
import { InexistentUrlComponent } from './nucleo/inexistent-url/inexistent-url.component';


const routes: Routes = [
	{ path: '', component: LogInComponent },
	{ path: 'buildings', loadChildren: () => import("./buildings/buildings.module").then(mod => mod.BuildingsModule) },
	{ path: 'renters', loadChildren: () => import("./renters/renters.module").then(mod => mod.RentersModule) },
	{ path: 'tenants', loadChildren: () => import("./tenants/tenants.module").then(mod => mod.TenantsModule) },
	{ path: '**', component: InexistentUrlComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
