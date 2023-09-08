import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authSerives: AuthentificationService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  signUp(name: any, mobile: any, email: any, password: any) {
    this.authSerives.registerUtilisateur(email.value, password.value)
      .then((credential) => {
        const utilisateur = credential.user;
        if (utilisateur && utilisateur.email) {
          const utilisateurData: Utilisateur = {
            uid: utilisateur.uid,
            email: utilisateur.email,
            name: name.value,
            //displayName: displayName,
            //photoURL: photoURL,
            mobile: mobile.value
          };
          this.authSerives.setUtilisateurData(utilisateurData);
          localStorage.setItem('uid', utilisateur.uid);
          this.router.navigate(['/users']);
        } else {
          window.alert('User registration failed.');
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  

  

}
