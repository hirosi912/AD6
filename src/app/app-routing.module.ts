import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuard } from './guards/auth.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule' },
      { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
      { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
      { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      { path: 'forms', loadChildren: './form/forms.module#FormModule' },
      { path: 'tables', loadChildren: './table/tables.module#TablesModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
      { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
      { path: 'extra-component', loadChildren: './extra-component/extra-component.module#ExtraComponentModule' },
      { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
      { path: 'sample-pages', loadChildren: './sample-pages/sample-pages.module#SamplePagesModule' }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
