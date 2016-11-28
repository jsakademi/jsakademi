import * as _ from 'lodash';
import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { Part, PartTypes, PartType } from '../parts.models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector   : 'part-details',
  templateUrl: './part-details.component.html',
  styleUrls  : ['part-details.component.scss']
})
export class PartDetailsComponent implements OnChanges, OnInit {
  @Input() part: Part;
  
  partForm: FormGroup;
  partTypes: PartType[];
  
  constructor(formBuilder: FormBuilder) {
    this.part = new Part();
    this.partTypes = PartTypes;
    this.partForm = formBuilder.group({
      type   : ['', Validators.required],
      content: formBuilder.group({
        code : '',
        text : '',
        video: ''
      })
    }, {'validator': this.partValidator});
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.setPartForm(this.partForm, this.partTypes, changes['part'].currentValue);
    this.setPart(changes['part'].currentValue, this.partForm.value);
  }
  
  ngOnInit() {
    this.partForm.valueChanges.subscribe(value => this.setPart(this.part, value));
  }
  
  /** PRIVATE FUNCTIONS*/
  
  partValidator(contentGroup: FormGroup) {
    return contentGroup.value.type && contentGroup.get('content').get(contentGroup.value.type).value ? null : {'missing-content': true};
  }
  
  setPartForm(partForm: FormGroup, partTypes: PartType[], part: Part) {
    // add contents for each type
    let contentGroup = _.reduce(partTypes, (contentGroup, type) => {
      contentGroup[type] = part.type === type ? part.content : '';
      return contentGroup
    }, {});
    // set values to partForm
    partForm.setValue({type: part.type || '', content: contentGroup});
    return partForm;
  }
  
   setPart(part: Part, value): Part {
    if (part.type !== value.type) {
      part.type = value.type;
    }
    part.content = value.content[value.type];
    return part;
  }
}
