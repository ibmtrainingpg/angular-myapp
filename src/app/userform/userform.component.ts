import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string = 'Userform';
  firstname='Ram';
  constructor() { }
  save(){
    console.log('working...');
    console.log(this.firstname);
    this.firstname = 'John';
  }
  ngOnInit(): void {
  }
}
