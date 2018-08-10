import { Routes } from '@angular/router';

import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { DemotestComponent } from './demotest/demotest.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'email',
        component: EmailComponent,
        data: {
          title: 'Email Page',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Email Page' }]
        }
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: {
          title: 'Taskboard',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Taskboard' }]
        }
      },
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Full-Calendar',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Full-Calendar' }]
        }
      },
      {
        path: 'demotest',
        component: DemotestComponent,
        data: {
          title: 'Chasel Test',
          urls: [{ title: 'demotest', url: '/demotest' }, { title: 'Demo-Test' }]
        }
      }
    ]
  }
];
