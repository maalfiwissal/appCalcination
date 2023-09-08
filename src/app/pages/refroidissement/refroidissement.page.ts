import { Component, OnInit } from '@angular/core';
import { CalcinationexcelService } from '../calcinationexcel.service';
@Component({
  selector: 'app-refroidissement',
  templateUrl: './refroidissement.page.html',
  styleUrls: ['./refroidissement.page.scss'],
})
export class RefroidissementPage implements OnInit {
  excelData: any[][] ;
  constructor(private excelService: CalcinationexcelService) {this.excelData = initializeMultiArray(100, 100); }

  async ngOnInit() {
    try {
      // Automatically load the Excel file when the component initializes
      this.excelData = await this.excelService.readCalcinationExcelFile();
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  }

}

function initializeMultiArray(rows: number, columns: number): any[][] {
  return Array.from({ length: rows }, () => new Array(columns));
}
