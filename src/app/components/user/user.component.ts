import { Component } from "@angular/core";

import { User } from "../../models/User";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // Properties
    user: User
    
    // Methods
    constructor() {
        this.user = {
            firstName: "John",
            lastName: "Doe",
            age: 31,
            address: {
                street: "50 Main Street",
                city: "San Diego",
                state: "CA"
            }
        }
    }
}
