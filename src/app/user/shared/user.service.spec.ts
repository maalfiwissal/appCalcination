import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userListRef: AngularFireList<User>;
  userRef: AngularFireObject<User>;

  constructor(private db: AngularFireDatabase) {
    this.userListRef = db.list<User>('/users');
    this.userRef = db.object<User>('/users');
  }

  createUser(user: User) {
    return this.userListRef.push(user);
  }

  getUser(id: string) {
    return this.db.object<User>(`/users/${id}`);
  }

  getUserList() {
    return this.userListRef;
  }

  updateUser(user: User) {
    return this.userRef.update(user);
  }

  deleteUser(id: string) {
    return this.userRef.remove();
  }
}

