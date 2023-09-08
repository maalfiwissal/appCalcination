import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  userForm!: FormGroup;

  constructor(
  private userService:UserService,
   private router:Router,
   private fb:FormBuilder,
  ) { }
  

  ngOnInit() {
    this.userForm =this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      details:[''],
    })
    
  }
formSubmit(){
  if (!this.userForm.valid) {
    return;
  }else{
    this.userService.createUser(this.userForm.value)
    .then(res =>{
      console.log(res)
      this.userForm.reset();
      this.router.navigate(['/users'])
    }).catch(error => console.log(error))
  }

}

}
