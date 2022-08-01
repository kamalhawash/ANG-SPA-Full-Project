import { TeacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/Teacher';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatteacher',
  templateUrl: './creatteacher.component.html',
  styleUrls: ['./creatteacher.component.css']
})
export class CreatteacherComponent implements OnInit {
  object = new Teacher;
  errors ;
  constructor( private serv: TeacherService, private route : Router) { 
   


  }

  ngOnInit(): void {
  }

  save(studentname,studentage) {
    if (studentname.errors == null && studentage.errors == null  ){ this.serv.post(this.object).subscribe(data=>{
      this.route.navigateByUrl("/lt");
  });
}else{
  this.errors = "you must enter valid in this input "
}
    
    
  }

}
