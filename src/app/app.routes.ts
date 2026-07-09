import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'MissShepherd Portfolio'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
    title: 'About | MissShepherd'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Quests | MissShepherd'
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills').then((m) => m.Skills),
    title: 'Skill Tree | MissShepherd'
  },
  {
    path: 'creative',
    loadComponent: () =>
      import('./pages/creative/creative').then((m) => m.Creative),
    title: 'Sketchbook | MissShepherd'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | MissShepherd'
  },
  {
    path: '**',
    redirectTo: ''
  }
];