import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PartDetailsComponent } from './part-details/part-details.component';

@NgModule({
  imports     : [
    CommonModule,
    FormsModule
  ],
  declarations: [PartDetailsComponent],
  exports     : [PartDetailsComponent]
})
export class PartsModule { }
