import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit, OnChanges {

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedStudent: any =null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter();
  @Output () onSaveEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType='Add';
  phoneNumberError: string = '';
  phoneExists: boolean = false;

  
  studentForm = this.formBody.group({
    id:["0"],
    name :["",Validators.required],
    email :["",Validators.required],
    phoneNumber :["",Validators.required],
    aadharNumber :["",Validators.required],
   
});

  constructor(private formBody:FormBuilder, private studentService: StudentService,private messageService:MessageService) { }
  ngOnChanges(): void {
    if(this.selectedStudent){
      this.modalType = "Edit";
      this.studentForm.patchValue(this.selectedStudent)
    }else{
      this.studentForm.reset();
      this.modalType = "Add";
    }
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.studentForm.reset();
    this.clickClose.emit(true);
  }

  addEditStudent(){

    const formData = this.studentForm.value;
    if(formData.id === null){
      formData.id = 0;
    }
    if(this.phoneExists){
      return;
    }

    this.studentService.addEditStudent(this.studentForm.value, this.selectedStudent).subscribe(
      response => {
        this.onSaveEdit.emit(response);
        this.studentService.getStudents();
        this.closeModal();
        const msg = this.modalType ==='Add'? 'Student added successfully': "Student updated successfully"
        this.messageService.add({severity:'success', summary:'Success', detail:msg});
      },error=>{
        this.messageService.add({severity:'error', summary:'Error ', detail:'Student not saved'});
        console.log("Encountered error");}
    )
  }
  onFocusOut(phoneNumber: string): void {
    if(!phoneNumber) {
      this.phoneNumberError = '';
      return;
    }
    if(this.selectedStudent && this.selectedStudent.phoneNumber === phoneNumber) {
      this.phoneNumberError = '';
      this.phoneExists = true;
      return;
    }
    this.studentService.checkPhoneNumberExists(phoneNumber).subscribe(
      (exists: boolean) => {
        this.phoneExists = exists;
        this.phoneNumberError = exists? 'Phone Number Already Exists.' : '';
      },
      (error) => {
        console.error('Error:', error);
        this.phoneNumberError = 'An error occured while checkingthe phone number.';
        this.phoneExists = false;
      }
    )
  }

}
