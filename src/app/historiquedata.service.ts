import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class HistoriquedataService {
  private historyData: { date:string; heureActuelle:string; nom: string; description: string ; }[] = [];

  
  constructor(private afDB: AngularFireDatabase) {}

  addToHistory(data: { date:string; heureActuelle:string ; nom: string; description: string ;}) {
   
    this.afDB.list('/history').push(data);
  }

  getHistory() {
    return this.afDB.list('/history').valueChanges();
  }

  clearHistory() {
    // Remove all historical data from Firebase
    this.afDB.list('/history').remove();
  }

}
