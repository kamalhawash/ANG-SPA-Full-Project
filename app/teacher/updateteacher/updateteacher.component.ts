import { TeacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/Teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent  {

  errors ;
  id ;
  object = new Teacher;
  http: any;
  constructor( private serv: TeacherService, private route : Router ,  private activeroute : ActivatedRoute)
 { 

    this.id = this.activeroute.snapshot.paramMap.get('id')
  }
 
  ngOnInit(): void {
  }

  update() {
    this.serv.put(this.object, this.id).subscribe(data =>{
      this.route.navigateByUrl('/lt');
    })
  }

 
}
