import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingsComponent } from './buildings/buildings.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RecordsComponent } from './records/records.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
	{ path: 'buildings', component: BuildingsComponent },
	{ path: 'schedule', component: ScheduleComponent },
	{ path: 'personalInfo', component: PersonalInfoComponent },
	{ path: 'records', component: RecordsComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RentersRoutingModule { }
