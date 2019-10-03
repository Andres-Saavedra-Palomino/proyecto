import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingsRoutingModule } from './buildings-routing.module';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'

@NgModule({
	declarations: [ListComponent, CalendarComponent],
	imports: [
		CommonModule,
		BuildingsRoutingModule,
		FullCalendarModule
	]
})
export class BuildingsModule { }
