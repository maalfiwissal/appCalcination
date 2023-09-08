import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class CalcinationexcelService {

  constructor() { }

  readCalcinationExcelFile(): Promise<any[][]> {
    return new Promise((resolve, reject) => {
      // Replace 'excelcalcinat.xlsx' with the path to your file
      const filePath = '../../../assets/excelcalcinat.xlsx'; // Modify the path as needed

      fetch(filePath)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          
          // Explicitly type jsonData as any[][]
          const jsonData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          
          resolve(jsonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
