import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
          },
          image: "https://loremflickr.com/300/300?people=1",
        },
        {
          firstName: "Tony",
          lastName: "Ibrahim",
          age: 24,
          address: {
              street: "123 Florentine Drive,",
              city: "Farmington Hills,",
              state: "MI"
          },
          image: "https://loremflickr.com/300/300?people=2",
        },
        {
          firstName: "Sarah",
          lastName: "Smith",
          age: 21,
          address: {
              street: "555 Horseshoe Road,",
              city: "Houston,",
              state: "TX"
          },
          image: "https://loremflickr.com/300/300?people=3",
        }
      ];

    this.loaded = true;

    this.addUser({
      firstName: "David",
      lastName: "Jackson",
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
