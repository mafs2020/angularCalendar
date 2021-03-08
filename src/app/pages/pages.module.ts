import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rutasPagesModule } from './pages.routes';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    rutasPagesModule,
    FormsModule,
    ReactiveFormsModule,
    // FlatpickrModule.forRoot(),
    Ng2FlatpickrModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class PagesModule { }
