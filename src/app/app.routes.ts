import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'calendar',
        loadComponent: () => import('./Components/calender/calender.component').then(m => m.CalenderComponent)
    },
    {
        path: '',
        component: LayoutComponent,
        providers: [
            provideAnimations(),
            provideNativeDateAdapter(),
            { provide: MAT_DIALOG_DATA, useValue: {} }  // Add this provider
        ],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./Components/dashboard/dashboard.component').then(m => m.DashboardComponent)   
            }
        ]
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./Components/sign-in/sign-in.component').then(m => m.SignInComponent),
    }
];
