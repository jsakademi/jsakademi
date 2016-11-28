import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { PartsModule } from "./parts/parts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    // sub modules
    PartsModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
