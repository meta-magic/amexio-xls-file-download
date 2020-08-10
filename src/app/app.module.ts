import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcelService } from './service/excel.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmexioWidgetModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
