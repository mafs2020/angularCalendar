import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SegundoCalendarioComponent } from './segundo-calendario/segundo-calendario.component';

const rutas: Routes = [

    {   path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: SegundoCalendarioComponent }
        ]
    }

];

export const rutasPagesModule = RouterModule.forChild(rutas);
