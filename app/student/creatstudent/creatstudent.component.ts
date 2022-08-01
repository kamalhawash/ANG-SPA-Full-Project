import { Student } from './../../models/Student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-creatstudent',
  templateUrl: './creatstudent.component.html',
  styleUrls: ['./creatstudent.component.css']
})
export class CreatstudentComponent implements OnInit {

  object = new Student;
  errors ;
  constructor( private serv: StudentService, private route : Router) { 
   


  }

  ngOnInit(): void {
  }

  save(studentname,studentage) {
    if (studentname.errors == null && studentage.errors == null  ){ this.serv.post(this.object).subscribe(data=>{
      this.route.navigateByUrl("liststudent");
  });
}else{
  this.errors = "you must enter valid in this input "
}
    
    
  }

}
