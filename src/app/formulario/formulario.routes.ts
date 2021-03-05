import { RouterModule, Routes } from '@angular/router';

import { FormualarioDateComponent } from './formualario-date/formualario-date.component';

const rutas: Routes = [
    { path: '', component: FormualarioDateComponent }
];

export const rutasFormularioModule = RouterModule.forChild(rutas);
