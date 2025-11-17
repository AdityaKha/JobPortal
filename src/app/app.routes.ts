import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'job-list',
        loadComponent: () => import('./job-list/job-list.component').then(m => m.JobListComponent)
    },
    {
        path: 'create-job',
        loadComponent: () => import('./job-create/job-create.component').then(m => m.JobCreateComponent)
    }
];
