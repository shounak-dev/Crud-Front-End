import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditStudentComponent } from './add-edit-student.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AddEditStudentComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule
  ],
  exports: [
    AddEditStudentComponent
  ]
})
export class AddEditStudentModule { }
