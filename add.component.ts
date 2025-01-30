import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesApiService } from '../../ShowUser/services-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  reactiveForm: FormGroup;
  

  constructor(private Adminservice:ServicesApiService ,private routter:Router){this.reactiveForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]), // 10-digit number
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)]), // Age between 1-120
    gender: new FormControl('', [Validators.required])
  });}
  isInvalid(controlName: string): any {
    const control = this.reactiveForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched);
  }
addUser(){
  console.log(this.reactiveForm.value);
  this.Adminservice.addUser(this.reactiveForm.value).subscribe((data:any)=>{
    console.log(data);
    alert("User added successfully!");  // Show success message
        this.routter.navigate(['/show']);
  })
}

}
