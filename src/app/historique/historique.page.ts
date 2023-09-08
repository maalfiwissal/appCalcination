import { Component, OnInit } from '@angular/core';
import { HistoriquedataService } from '../historiquedata.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  
  historyData$!: Observable<{ date: string; heureActuelle:string; nom: string; description: string }[]>;
  //historyData: { nom: string; description: string }[] = []

  constructor(private historiqueDataService : HistoriquedataService) {
      // Retrieve data from Firebase Realtime Database and cast it to the correct type
      this.historyData$ = this.historiqueDataService.getHistory().pipe(
        map((data: unknown[]) => {
          // Assuming data is an array of objects with 'nom' and 'description' properties
          return data as { date: string; heureActuelle:string; nom: string; description: string }[];
        })
      );
   }

   clearHistory() {
    // Call the clearHistory method in HistoriqueDataService
    this.historiqueDataService.clearHistory();
  }

  ngOnInit() {
   // this.historyData = this.historiqueDataService.getHistory();
  
  }
  

  }


