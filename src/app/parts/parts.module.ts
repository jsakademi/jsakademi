import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { PartDetailsComponent } from './part-details/part-details.component';
import { PartViewComponent } from './part-view/part-view.component';
import { HighlightJsModule } from 'angular2-highlight-js';
import { YoutubeSafeUrlPipe } from './shared/youtube-safe-url.pipe';

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    HighlightJsModule
  ],
  declarations: [PartDetailsComponent, PartViewComponent, YoutubeSafeUrlPipe],
  exports     : [PartDetailsComponent, PartViewComponent]
})
export class PartsModule { }
