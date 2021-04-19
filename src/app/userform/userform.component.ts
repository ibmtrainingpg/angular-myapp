import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title: string = 'Userform';
  user: User = new User(); //model -stores all form data, Change detection works on mode
  userArray: any;
  constructor(private userService: UserService) { }
  deleteUser(id:number, index:number){
    const observable = this.userService.delete(id);
    observable.subscribe(response=> this.userArray.splice(index,1))
  }
  save() {
    const observable = this.userService.save(this.user);
    observable.subscribe(response => { //success function
      console.log(response);
      this.user.id=response;
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
    },
      error => {//error function
        console.log(error);
        alert('error happenned..')
      })
    // this.user.firstname = 'John';

  }
  ngOnInit(): void {
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {
      console.log(response);
      this.userArray = response;
     });
  }
}
