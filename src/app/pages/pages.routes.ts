import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CalendarioComponent } from './calendario/calendario.component';

const rutas: Routes = [

    {   path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: CalendarioComponent }
        ]
    }

];

export const rutasPagesModule = RouterModule.forChild(rutas);
