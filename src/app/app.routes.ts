import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Creative } from './pages/creative/creative';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'MissShepherd | Creative Frontend Developer',
  },
  {
    path: 'about',
    component: About,
    title: 'About | MissShepherd',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects | MissShepherd',
  },
  {
    path: 'skills',
    component: Skills,
    title: 'Skill Tree | MissShepherd',
  },
  {
    path: 'creative',
    component: Creative,
    title: 'Creative Side | MissShepherd',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | MissShepherd',
  },
  {
    path: '**',
    redirectTo: '',
  },
];