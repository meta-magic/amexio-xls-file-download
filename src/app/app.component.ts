import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExcelService } from './service/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'amexio xls file export';

  data: any [] = [];
  constructor(private http: HttpClient, private excelService: ExcelService) {

  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.http.get("assets/data/country.json").subscribe((response:any)=>{
      this.data = response.data;
    });
  }

  exportXlS(event: any) {
    debugger;
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
