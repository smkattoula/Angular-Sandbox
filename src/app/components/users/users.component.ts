import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        age: 31,
        address: {
            street: "50 Main Street,",
            city: "San Diego,",
            state: "CA"
        }
      },
      {
        firstName: "Tony",
        lastName: "Ibrahim",
        age: 24,
        address: {
            street: "123 Florentine Drive,",
            city: "Farmington Hills,",
            state: "MI"
        }
      },
      {
        firstName: "Sarah",
        lastName: "Smith",
        age: 21,
        address: {
            street: "555 Horseshoe Road,",
            city: "Houston,",
            state: "TX"
        }
      }
      
    ];

    this.addUser({
      firstName: "David",
      lastName: "Jackson",
      age: 32,
      address: {
          street: "12 Groove St,",
          city: "Portland,",
          state: "OR"
      }
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
