import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfflineDashboardComponent } from './offline-dashboard-component';

export const routes : Routes = [

    { path: '',
        children: [
        { 
            path: '', component: OfflineDashboardComponent 
        }
        ]
    }
];

export const offlineDashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);
