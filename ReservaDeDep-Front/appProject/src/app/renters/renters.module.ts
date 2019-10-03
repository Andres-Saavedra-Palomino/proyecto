import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentersRoutingModule } from './renters-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RecordsComponent } from './records/records.component';


@NgModule({
  declarations: [PersonalInfoComponent, BuildingsComponent, ScheduleComponent, RecordsComponent],
  imports: [
    CommonModule,
    RentersRoutingModule
  ]
})
export class RentersModule { }
