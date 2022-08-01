import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/shared/student.service';


@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent  {
  errors ;
  id ;
  object = new Student;
  http: any;
  constructor( private serv: StudentService, private route : Router ,  private activeroute : ActivatedRoute)
 { 

    this.id = this.activeroute.snapshot.paramMap.get('id')
  }
 
  ngOnInit(): void {
  }

  update() {
    this.serv.put(this.object, this.id).subscribe(data =>{
      this.route.navigateByUrl('liststudent');
    })
  }

}
