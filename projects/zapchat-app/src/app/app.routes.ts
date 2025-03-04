import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { label: 'Home', icon: 'pi pi-home' },
  },
  /*{
    path: 'dashboard',
    data: { label: 'Dashboard', icon: 'pi pi-chart-bar' },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { label: 'Overview', icon: 'pi pi-eye' },
      },
      {
        path: 'details',
        component: DashboardComponent,
        data: { label: 'Details', icon: 'pi pi-list' },
      },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { label: 'Settings', icon: 'pi pi-cog' },
  },*/
  { path: '**', redirectTo: '' },
];