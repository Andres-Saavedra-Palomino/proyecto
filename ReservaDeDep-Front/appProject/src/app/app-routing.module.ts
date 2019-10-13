import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './nucleo/home/home.component';
import { InexistentUrlComponent } from './nucleo/inexistent-url/inexistent-url.component';





const routes: Routes = [
	{ path: '', loadChildren: () => import("./nucleo/nucleo.module").then(mod => mod.NucleoModule) },
	{ path: 'home', component: HomeComponent },
	{ path: 'Aulas', loadChildren: () => import("./buildings/buildings.module").then(mod => mod.BuildingsModule) },
	{ path: 'usuario', loadChildren: () => import("./tenants/tenants.module").then(mod => mod.TenantsModule) },
	{ path: '**', component: InexistentUrlComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
