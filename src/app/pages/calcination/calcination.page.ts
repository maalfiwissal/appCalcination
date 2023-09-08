import { Component, OnInit , NgZone, ViewChild, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CalcinationexcelService } from '../calcinationexcel.service';


@Component({
  selector: 'app-calcination',
  templateUrl: './calcination.page.html',
  styleUrls: ['./calcination.page.scss'],
})



export class CalcinationPage implements OnInit {
  public modalIsOpen: boolean = false;
  message: string = '';
  messageToDisplay = "Votre message personnalisé ici";
  public customModal!: HTMLIonModalElement;
  excelData: any[][] ;
 // @Input() message!: string;

  constructor(private excelService: CalcinationexcelService,private modalController: ModalController) {
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

  async openCustomModal() {
    this.message = '';
    if (this.excelData[9][1] < 1600 || this.excelData[9][1] > 1800) {
      this.message += 'Vous avez un problème dans le niveaux du lit de calcinateur LIC260A. ';
    }

    if (this.excelData[40][1] < 1600 || this.excelData[40][1] > 1800) {
      this.message += 'Vous avez un problème dans le niveaux du lit de calcinateur LIC260B.  ';
    }

    if (this.excelData[32][1] < 700 || this.excelData[32][1] > 800 || this.excelData[33][1] < 700 || 
      this.excelData[33][1] > 800 || this.excelData[34][1] < 700 || this.excelData[34][1] > 800  ) {
      this.message += 'Vous avez un problème dans la température du lit de calcinateur. ';
    }
        
    if (this.message) {
      // Affichez un message uniquement s'il y a un message à afficher
      this.customModal = await this.modalController.create({
        component: CalcinationPage,
        componentProps: {
          message: this.message,
        },
      });

      //await this.customModal.present();
      this.modalIsOpen = true;
    }
  }

  async closeCustomModal() {
    if (this.customModal) {
      await this.modalController.dismiss();
      // Masquez le bouton "Fermer" et affichez le bouton "Ouvrir la boîte des alarmes"
      this.modalIsOpen = false;
    }
  }
  
  }
  


function initializeMultiArray(rows: number, columns: number): any[][] {
  return Array.from({ length: rows }, () => new Array(columns));
}