import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	nEvento: number = 3
	calendarPlugin = [dayGridPlugin, interactionPlugin]

	dia: string = new Date().getFullYear() + "-" + 0 + (new Date().getMonth() + 1) + "-" + 0 + (new Date().getDay() + 1)
	fecha = "2019-09-02"
	hora: string = new Date().getHours + ":" + new Date().getMinutes()



	addEvent() {
		this.calendarEvents.push(
			{ title: 'evento ' + this.nEvento, date: this.dia }
		);
		this.nEvento += 1
	}

	dateClick(arg) {
		this.calendarEvents.push(
			{ title: 'evento ' + this.nEvento, date: arg.date }
		);
		this.nEvento += 1
	}

	calendarEvents = [
		{ title: 'event 1', date: '2019-09-22 05:30' },
		{ title: 'event 2', date: '2019-09-22 08:30' },
	];



	modifyTitle(eventIndex, newTitle) {
		this.calendarEvents[eventIndex].title = newTitle;
	}
	ngOnInit() {
		//this.addEvent()
		//this.modifyTitle(1, "clase de Angular")
		//console.log(this.dia)
	}
}
