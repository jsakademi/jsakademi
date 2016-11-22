import * as _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { Part, PartTypes } from '../parts.models'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector   : 'part-details',
  templateUrl: './part-details.component.html',
  styleUrls  : ['./part-details.component.sass']
})
export class PartDetailsComponent implements OnInit {
  @Input() part: Part;
  
  partForm: FormGroup;
  partTypes = PartTypes;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    // create partForm, listen its changes and setPart
    this.partForm = this.buildPartForm(this.part);
    this.partForm.valueChanges.subscribe(this.setPart);
  }
  
  buildPartForm(part) {
    // add contents for each type and set current content
    let contentGroup = {};
    _.forEach(this.partTypes, function (type) {
      contentGroup[type] = type === part.type ? [part.content] : []
    });
    
    return this.formBuilder.group({
      type   : [part.type],
      content: this.formBuilder.group(contentGroup)
    });
  }
  
  setPart(partForm) {
    if (this.part.type !== partForm.type) {
      this.part.type = partForm.type;
    }
    this.part.content = partForm.content[partForm.type];
  }
}
