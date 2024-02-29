import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  displayAddEditModal = false;
  selectedStudent: any = null;
  subscription: Subscription[] = [];
  stdSubscription: Subscription = new Subscription();

  constructor(private studentService: StudentService, private confirmationService:ConfirmationService ,private messageService:MessageService) { }
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(){
    this.stdSubscription = this.studentService.getStudents().subscribe(
      response => {
        this.students = response;
        
      }
    );
    this.subscription.push(this.stdSubscription);
  }
  showAddModal(){
    this.displayAddEditModal = true;
    this.selectedStudent = null;
  }
  hideAddModal(isClosed:boolean){
    this.displayAddEditModal = !isClosed;
  }
  saveStudentToList(){
    this.getStudentList();
  }
  showEditModal(student: Student){
    this.displayAddEditModal = true;
    this.selectedStudent = student;
  }
  deleteStudent(student: Student){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Student?',
      accept: () => {
          this.studentService.deleteStudent(student.id).subscribe(
            response => {
              this.getStudentList();
              this.messageService.add({severity:'success', summary:'Success', detail:"Deleted Successfully"});
            }, error=>{
              this.messageService.add({severity:'error', summary:'Error', detail:error});

            }
          )
      }
  });
  }

}
