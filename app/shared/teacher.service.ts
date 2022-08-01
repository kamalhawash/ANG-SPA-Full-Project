import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApifunctionService<Teacher> {

  constructor(http:HttpClient) {
    super("http://localhost:3000/Teacher" ,http)
  }
}
