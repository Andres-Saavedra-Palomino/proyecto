import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './tenants-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RecordsComponent } from './records/records.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [PersonalInfoComponent, BookingsComponent, RecordsComponent, FavoritesComponent],
  imports: [
    CommonModule,
    TenantsRoutingModule
  ]
})
export class TenantsModule { }
