import { Router } from '@angular/router';
import { HistoriquedataService } from '../historiquedata.service';
import { Component, OnInit , NgZone, ViewChild, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CalcinationexcelService } from '../pages/calcinationexcel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  message: string = '';
  messageToDisplay = "Votre message personnalisé ici";
  private customModal!: HTMLIonModalElement;
  excelData: any[][] ;
  selectedDate!: string;
  public heureActuelle!: string;
  selectedEquipement!: string;
  equipementInfo!: { nom: string, description: string, };
  constructor(private router: Router,private historiqueServiceData: HistoriquedataService,
    private excelService: CalcinationexcelService,private modalController: ModalController ) {
      this.excelData = initializeMultiArray(100, 100);
    }

  async ngOnInit() {
    try {
      // Automatically load the Excel file when the component initializes
      this.excelData = await this.excelService.readCalcinationExcelFile();
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  }

  afficherInfosEquipement() {
    if (this.selectedEquipement === 'calcinateur') {
      this.equipementInfo = {
        nom: 'Calcinateur',
        description: ' PDI433:' + this.excelData[21][1]+ ' mmCE, TI206-1:' + this.excelData[23][1] + ' °C, TI205-1:' + this.excelData[28][1] + ' °C, TI205-2:' +
         this.excelData[29][1] + ' °C, TI205-3:'+ this.excelData[30][1] + ' °C, TI205-4:' + this.excelData[31][1] +' °C, TI203-1:' + this.excelData[32][1] +
        ' °C, TI2O3-2:' + this.excelData[33][1] +' °C, TI203-3:' + this.excelData[34][1] +' °C, TI207:' + this.excelData[35][1] +' °C, LIC260A:' +
        this.excelData[9][1] + ' mmCE, LIC260B:' + this.excelData[40][1] +' mmCE, PDI234:' + this.excelData[38][1] +' mmCE, PI230:' + this.excelData[43][1] +
        ' mmCE, PDI233' + this.excelData[39][1] + ' mmCE, PDI232:' + this.excelData[41][1] + 'mmCE, PDI231:' + this.excelData[42][1] + 'mmCE' ,
        // this.excelData[18][1] + ' m³, LIC260B:' + this.excelData[40][1] +' mmCE',
      };
    } else if (this.selectedEquipement === 'prerefroidisseur R338') {
      this.equipementInfo = {
        nom: 'Prerefroidisseur R338',
        description: ' TI305:' + this.excelData[7][7] + ' °C, TI303-1:' + this.excelData[8][7] + ' °C, TI303-2:' + this.excelData[9][7] + 
        ' °C, TI303-3:' + this.excelData[11][7] + ' °C, PDI333:' + this.excelData[6][7] + ' mmCE, PDI332:' + this.excelData[8][7] + ' mmCE, LIC360:' +
        this.excelData[12][7] + ' mmCE, PDI360:' + this.excelData[13][7] + ' mmCE, PI330:' + this.excelData[15][7] + ' mmCE' ,
      };
    } else if (this.selectedEquipement === 'post refroidisseur R339-1') {
      this.equipementInfo = {
        nom: 'Post refroidisseur R339-1',
        description: ' LCV360:' + this.excelData[26][7] + ' %, PDI432:' + this.excelData[27][7] + ' mmCE, LIC560:' + this.excelData[28][7] + 
        ' mmCE, PI430:' + this.excelData[33][7] + ' mmCE, TI403-1:' + this.excelData[29][7] + ' °C, TI403-2:' + this.excelData[30][7] +' °C',
      };
    } else if (this.selectedEquipement === 'post refroidisseur R339-2') {
      this.equipementInfo = {
        nom: 'Post refroidisseur R339-2',
        description: ' PI533:' + this.excelData[24][7] + ' mmCE, TI505:' + this.excelData[25][7] + ' °C, PI530:' + this.excelData[34][7] + 
        ' mmCE, PDI532:' + this.excelData[31][7] + ' mmCE, TI503:' + this.excelData[35][7] + ' °C' ,
      };
    } else if (this.selectedEquipement === 'prechauffeur R336') {
      this.equipementInfo = {
        nom: 'Prechauffeur R336',
        description: ' TI105:' + this.excelData[18][3] + ' °C, TI104-1:' + this.excelData[19][3] + ' °C, TI103:' + this.excelData[20][3] + 
        ' °C, PDI131:' + this.excelData[21][3] + ' mmCE, TI101:' + this.excelData[22][3] + ' °C, TI104-2:' + this.excelData[28][3] +
        ' °C, PDI131:' + this.excelData[30][3] + ' °C, LIC160:' + this.excelData[29][3] + ' mmCE, PDI134:' + this.excelData[25][3] + 
        ' °C, PI133:' + this.excelData[26][3] + ' mmCE, PDI132:' + this.excelData[27][3] + ' mmCE' ,
      };
    } 
     else {
      this.equipementInfo!= null; // Réinitialiser les informations si aucun animal n'est sélectionné
    }

    const dateActuelle = new Date();
    const heures = dateActuelle.getHours();
    const minutes = dateActuelle.getMinutes();
    const secondes = dateActuelle.getSeconds();
    this.heureActuelle = `${heures}:${minutes}:${secondes}`;
  }

  enregistrerInfos() {
    
    if (this.equipementInfo) {
     
      const dataToSave = {
        date: this.selectedDate,
        nom: this.equipementInfo.nom,
        description: this.equipementInfo.description,
        heureActuelle: this.heureActuelle,
      };
  
      // Add the data to the history using the service
      this.historiqueServiceData.addToHistory(dataToSave);
  
      // Navigate to HistoriquePage
      this.router.navigate(['/historique']);
    } else {
      alert('Equipement information is not available. Please select an equipement first.');
    }
      /*
      // Add the data to the history using the service
      this.historiqueServiceData.addToHistory(this.equipementInfo);

      // Navigate to HistoriquePage
      this.router.navigate(['/historique']);
    } else {
      alert('Equipement information is not available. Please select an equipement first.');
    }
    */
  }

  navigateToHistorique() {
    this.router.navigate(['historique']);
  }
  public getHeureActuelle(): string {
    return this.heureActuelle;
  }
}
function initializeMultiArray(rows: number, columns: number): any[][] {
  return Array.from({ length: rows }, () => new Array(columns));
}