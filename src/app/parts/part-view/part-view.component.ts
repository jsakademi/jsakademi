import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../parts.models';

@Component({
  selector: 'part-view',
  templateUrl: './part-view.component.html',
  styleUrls: ['./part-view.component.scss']
})
export class PartViewComponent implements OnInit {
  @Input() part: Part;

  constructor() { }

  ngOnInit() {
  }

}
