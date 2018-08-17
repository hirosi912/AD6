import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppsRoutes } from './apps.routing';
import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { DemotestComponent } from './demotest/demotest.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, FormsModule, NgbModalModule.forRoot(), CalendarModule.forRoot(), QuillModule, DragulaModule, RouterModule.forChild(AppsRoutes), Ng2SmartTableModule],
  declarations: [EmailComponent, TaskboardComponent, FullcalendarComponent, DemotestComponent]
})
export class AppsModule {}
