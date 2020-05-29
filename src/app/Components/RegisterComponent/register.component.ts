import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html',
    styleUrls:['register.component.scss']
})

export class RegisterComponent implements OnInit {
    public formgroup = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
      });
    constructor() { }
    ngOnInit() { }

    onSubmit(){
        console.log(this.formgroup.value)
    }

   
}