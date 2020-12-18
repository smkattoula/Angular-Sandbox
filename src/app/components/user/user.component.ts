import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    undefined: undefined;
    null: null;


    // Methods
    constructor() {
       this.firstName = "John";
       this.lastName = "Doe";
       this.age = 30;

       this.address = {
           street: "123 Sunglow Drive",
           city: "Oceanside",
           state: "CA"
       }

       this.foo = true;
       this.hasKids = false;
       this.numberArray = [1,2,3];
       this.stringArray = ["Hello world"];
       this.mixedArray = [true, undefined, "hello", 2];
       this.myTuple = ["hello", 1, true];
       this.unusable = undefined;
       this.undefined = undefined;
       this.null = null;

       console.log(this.addNumbers(2,3));
    }

    addNumbers(num1:number, num2:number): number {
        return num1 + num2
    }
}