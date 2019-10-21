import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './nucleo/home/home.component';
import { InexistentUrlComponent } from './nucleo/inexistent-url/inexistent-url.component';
import { BuildingsModule } from './buildings/buildings.module';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '', loadChildren: () => import("./nucleo/nucleo.module").then(mod => mod.NucleoModule) },
	{ path: 'aulas', loadChildren: () => import("./buildings/buildings.module").then(mod => mod.BuildingsModule) },
	{ path: 'usuario', loadChildren: () => import("./tenants/tenants.module").then(mod => mod.TenantsModule) },
	{ path: '**', component: InexistentUrlComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
