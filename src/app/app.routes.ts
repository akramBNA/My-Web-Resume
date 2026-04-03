import { Routes } from '@angular/router';
import { ResumeMainComponent } from '../components/resume/resume-main/resume-main.component';
import { HomeComponent } from '../components/home page/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', loadComponent: () => import('../components/resume/resume-main/resume-main.component').then(m => m.ResumeMainComponent) },
  { path: '**', redirectTo: '' },
];