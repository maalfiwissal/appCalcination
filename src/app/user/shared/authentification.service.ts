import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   
  utilisateurData: any;
  userListRef! :AngularFireList<any>;

  
  constructor(
    public afStore:AngularFirestore,
    public ngFireAuth:AngularFireAuth,
    public router:Router,
    private db:AngularFireDatabase
  ) {
    this.ngFireAuth.authState.subscribe(utilisateur =>{
      if(utilisateur){
        this.utilisateurData = utilisateur
        localStorage.setItem('utilisateur', JSON.stringify(this.utilisateurData))
        JSON.parse(localStorage.getItem('utilisateur')!)
        
      } else {
        localStorage.setItem('utilisateur', '')
        JSON.parse(localStorage.getItem('utilisateur')!)
      }
    })
    this.userListRef = this.db.list('/utilisateurs')
   }

   signIn(email:string,password:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email,password)
   }

   registerUtilisateur(email:string,password:string){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
   }

   get isLoggedIn() :boolean{
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur') || '{ }')
    return (utilisateur !== null ) ? true:false
   }

   setUtilisateurData(utilisateur:any){
    const utilisateurRef : AngularFirestoreDocument<any> = this.afStore.doc(`utilisateurs/${utilisateur.uid}`)
    const userRef : AngularFireObject<any> = this.db.object(`/users/${utilisateur.uid}`)
    const utilisateurData : Utilisateur ={
      uid: utilisateur.uid,
      email: utilisateur.email,
      name: utilisateur.name,
      //displayName:utilisateur.displayName,
      //photoURL: utilisateur.photoURL,
      mobile:utilisateur.mobile
    }

    userRef.set(utilisateurData)

    return utilisateurRef.set(utilisateurData,{ 
      merge: true
    })
   }

   signOut(){
    return this.ngFireAuth.signOut().then(()=>{
      localStorage.removeItem('utilisateur')
      localStorage.removeItem('uid')
      this.router.navigate(['login'])
    })
   }

   deleteUser(uid: string) {
    return this.ngFireAuth.currentUser.then((user) => {
      if (user) {
        return user.delete();
      } else {
        return Promise.reject(new Error('User not found'));
      }
    });
  }

}
