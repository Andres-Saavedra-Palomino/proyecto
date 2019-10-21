import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RecordsComponent } from './records/records.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
	{
		path: '', children: [
			{ path: '', component: BookingsComponent },
			{ path: 'personalInfo', component: PersonalInfoComponent },
			{ path: 'records', component: RecordsComponent },
			{ path: 'favorites', component: FavoritesComponent },
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TenantsRoutingModule { }
