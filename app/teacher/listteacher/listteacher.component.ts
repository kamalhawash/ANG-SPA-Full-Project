import { TeacherService } from './../../shared/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listteacher',
  templateUrl: './listteacher.component.html',
  styleUrls: ['./listteacher.component.css']
})
export class ListteacherComponent  {

  allData: any;

  constructor(private serv: TeacherService ) {
    this.serv.list().subscribe((data: any) =>{
      this.allData = data


    })
   }

    remove($id: any){
      this.serv.delete($id).subscribe((data ) =>{
        location.reload();
      })
    }


 
}
