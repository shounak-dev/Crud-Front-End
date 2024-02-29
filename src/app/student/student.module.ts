import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';


import { StudentComponent } from './student.component';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'primeng/api';
import { AddEditStudentModule } from './add-edit-student/add-edit-student.module';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToolbarModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    SharedModule,
    CardModule,
    AddEditStudentModule,
    ConfirmDialogModule,
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
