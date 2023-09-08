
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import { User } from '../../models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userListRef: AngularFireList<any>;
  userRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
  this.userListRef = db.list('/users');
   
  }
  createUser(use:User){
    return this.userListRef.push({
      name: use.name,
      email: use.email,
      mobile: use.mobile, 
      details: use.details,
    })
  }

  getUser(id:string){
    return this.userRef = this.db.object('/users/'+ id)
  }

  getUserList(){
    return this.userListRef = this.db.list('/users')
  }

  UpdateUser(id:string,use:User){
    return this.userRef.update({
      name: use.name,
      email: use.email,
      mobile: use.mobile, 
      details: use.details,
    })
  } 

  deleteUserdata(id:string){
    this.userRef = this.db.object('/users/'+ id)
    this.userRef.remove()
  }


deleteUser(id: string) {
  this.userRef = this.db.object('/users/' + id);
  this.userRef.remove();

  // Delete user from Firebase Authentication
  const user = this.afAuth.currentUser; // This returns a Promise<User | null>
  
  if (user) {
    user
      .then((currentUser) => {
        if (currentUser) {
          currentUser
            .delete()
            .then(() => {
              console.log('Successfully deleted user from Auth');
            })
            .catch((error) => {
              console.log('Error deleting user from Auth:', error);
            });
        } else {
          console.log('No user is currently signed in.');
        }
      })
      .catch((error) => {
        console.log('Error getting current user:', error);
      });
  } else {
    console.log('No user is currently signed in.');
  }
}

}

