import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rutasPagesModule } from './pages.routes';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { FlatpickrModule } from 'angularx-flatpickr';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SegundoCalendarioComponent } from './segundo-calendario/segundo-calendario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

@NgModule({
  declarations: [
    DashboardComponent,
    SegundoCalendarioComponent
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
