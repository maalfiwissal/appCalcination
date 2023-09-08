import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './user/shared/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public authSerives: AuthentificationService,
    public router:Router,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
     
    });

   /* if (this.authSerives.isLoggedIn) {
      this.router.navigate(['login'])
    } else {
      
        this.router.navigate(['login'])
        
   
      
    }
  */

  }
}

