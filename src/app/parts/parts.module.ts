import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { PartDetailsComponent } from './part-details/part-details.component';
import { PartViewComponent } from './part-view/part-view.component';

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PartDetailsComponent, PartViewComponent],
  exports     : [PartDetailsComponent, PartViewComponent]
})
export class PartsModule {
}
