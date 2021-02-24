import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rutasPagesModule } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    rutasPagesModule
  ]
})
export class PagesModule { }
