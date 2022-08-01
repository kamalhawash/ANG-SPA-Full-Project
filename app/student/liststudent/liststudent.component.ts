import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  allData: any;

  constructor(private serv: StudentService ) {
    this.serv.list().subscribe((data: any) =>{
      this.allData = data


    })
   }

    remove($id: any){
      this.serv.delete($id).subscribe((data ) =>{
        location.reload();
      })
    }







  ngOnInit(): void {
  }

}

