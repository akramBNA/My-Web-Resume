import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeMainComponent } from '../components/resume/resume-main/resume-main.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' },
  { path: 'resume', loadComponent: () => import('../components/resume/resume-main/resume-main.component').then(m => m.ResumeMainComponent) }
];