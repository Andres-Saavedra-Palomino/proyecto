import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AutenticacionGuard } from '../guards/autenticacion.guard';


const routes: Routes = [
	{ path: '', component: ListComponent },
	{ path: 'calendar', component: CalendarComponent }
];

@NgModule({

	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BuildingsRoutingModule { }
