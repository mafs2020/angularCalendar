import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormualarioDateComponent } from './formualario-date/formualario-date.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { rutasFormularioModule } from './formulario.routes';

@NgModule({
  declarations: [FormualarioDateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    rutasFormularioModule
  ]
})
export class FormularioModule { }
