import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  
  updateUserForm!: FormGroup;
  id:any;
  constructor(
   private userService:UserService,
   private router:Router,
   private actRoute:ActivatedRoute,
   private fb:FormBuilder,
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).valueChanges().subscribe(res=>{
      this.updateUserForm.setValue(res)
    })
  }

  ngOnInit() {
    this.updateUserForm =this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      details:[''],
    })
    console.log(this.updateUserForm.value)
  }

  updateForm(){
   
      this.userService.UpdateUser(this.id,this.updateUserForm.value)
      .then(() =>{  
        this.router.navigate(['/users'])
      }).catch(error => console.log(error))      
  }

}

