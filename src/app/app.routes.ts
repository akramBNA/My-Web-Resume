import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeMainComponent } from '../components/resume/resume-main/resume-main.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../components/home page/home/home.component').then(m => m.HomeComponent) },
  { path: 'resume', loadComponent: () => import('../components/resume/resume-main/resume-main.component').then(m => m.ResumeMainComponent) },
  { path: '**', redirectTo: '' },
];