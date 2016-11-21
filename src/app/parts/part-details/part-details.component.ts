import { Component, OnInit } from '@angular/core';
import { Part, PartType, PartTypes } from '../parts.models'

@Component({
  selector   : 'part-details',
  templateUrl: './part-details.component.html',
  styleUrls  : ['./part-details.component.sass']
})
export class PartDetailsComponent implements OnInit {
  part: Part;
  partTypes: PartType[];
  
  constructor() {
    this.part      = new Part(PartTypes[1], {});
    this.partTypes = PartTypes;
  }
  
  ngOnInit() { }
}
