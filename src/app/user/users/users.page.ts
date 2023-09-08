
// users.page.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from 'src/app/models/User';
import { AuthentificationService } from '../shared/authentification.service';
import 'firebase/auth'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
     public authSerives: AuthentificationService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    let usersres = this.userService.getUserList();
    usersres.snapshotChanges().subscribe(res => {
      this.users = res.map(item => {
        const user: User = {
          $key: item.payload.key,
          ...item.payload.val()
        };
        return user;
      });
    });
  }
/*
  deleteUsers(id:string){
    console.log(id)
    if(window.confirm('Are you sure?')){
      this.userService.deleteUser(id)
    }    

    }
*/



deleteUsers(uid: string) {
  if (window.confirm('Are you sure you want to delete this user?')) {
    
    this.authSerives.deleteUser(uid)
      .then(() => {
        console.log('Successfully deleted user');
        // Optional: You can also remove the user from your local users array
        this.userService.deleteUserdata(uid)
      })
      .catch((error) => {
        console.log('Error deleting user:', error);
      });
  }
}
    

  }




