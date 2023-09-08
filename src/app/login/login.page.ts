import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../user/shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authSerives: AuthentificationService,
    public router:Router
    ) { }

  ngOnInit() {
  }

  logIn(email :any, password:any){
    this.authSerives.signIn(email.value, password.value).
    then((res) =>{
        localStorage.setItem('uid', res.user!.uid)
        this.router.navigate(['/home']);
    }).catch((error)=>{
       window.alert(error.message)
    })
  }

  registerPage(){
        this.router.navigate(['/registration']);
        
  }

  
}
