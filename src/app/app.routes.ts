import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'inscribite',
    loadComponent: () => import('./pages/inscribite/inscribite.page').then((m) => m.InscribitePage)
  },
  {
    path: 'classes',
    loadComponent: () => import('./pages/classes/classes.page').then(m => m.ClassesPage)
  },
  {
    path: 'enroll',
    loadComponent: () => import('./pages/enroll/enroll.page').then(m => m.EnrollPage)
  },
  {
    path: 'waiting',
    loadComponent: () => import('./pages/waiting/waiting.page').then(m => m.WaitingPage)
  },
  {
    path: 'record',
    loadComponent: () => import('./pages/record/record.page').then(m => m.RecordPage)
  },
  {
    path: 'schedule',
    loadComponent: () => import('./pages/schedule/schedule.page').then(m => m.SchedulePage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
  },
];
