import { Component } from '@angular/core';
import { Part } from './parts/parts.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  part: Part = {
    type: 'text',
    content: 'wtf is this shit'
  };
  part2 = {};
}
