import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const rutas: Routes = [
    { path: 'dashboard', loadChildren: async () => (await import('./pages/pages.module')).PagesModule },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', redirectTo: 'dashboard' }
];

export const rutasPadreModule = RouterModule.forRoot(rutas);
