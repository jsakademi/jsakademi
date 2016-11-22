import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { PartDetailsComponent } from './part-details/part-details.component';

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PartDetailsComponent],
  exports     : [PartDetailsComponent]
})
export class PartsModule {
}
