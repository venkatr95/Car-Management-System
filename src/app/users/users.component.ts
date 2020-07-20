import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  selectedUser: Users;

  constructor(private userService: UserService) {
    this.selectedUser = new Users();
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
  
  editUser(userId: number) {
    this.selectedUser = this.users.find( 
      (e: Users) => e.userId === userId
    );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe((user: Users) => {
      this.getUsers();
    });
  }

}
