import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title:string = 'Userform';
  user:User=new User(); //model -stores all form data
  userArray:User[]=[];
  constructor() { }
  save(){
    this.userArray.push(this.user);
    console.log('working...');
    console.log(this.user.firstname);
    // this.user.firstname = 'John';

  }
  ngOnInit(): void {
  }
}
