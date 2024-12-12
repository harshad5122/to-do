import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        providers: [
            provideAnimations(),
            provideNativeDateAdapter(),
            { provide: MAT_DIALOG_DATA, useValue: {} }
        ],
        children: [
            { 
                path: 'dashboard',
                loadComponent: () => import('./Components/dashboard/dashboard.component').then(m => m.DashboardComponent)   
            },
            {
                path: 'admin-dashboard',
                loadComponent: () => import('./Components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)   
            },
            { 
                path: '', 
                redirectTo: 'dashboard', 
                pathMatch: 'full' 
            }
        ]
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./Components/sign-in/sign-in.component').then(m => m.SignInComponent),
    },
    {
        path: '**',  // Catch all route
        redirectTo: ''
    }
];
