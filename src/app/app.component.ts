import { Component } from '@angular/core';
import { Part } from './parts/parts.models';
import { PartService } from './parts/shared/part.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  providers  : [PartService]
})
export class AppComponent {
  title = 'app works!';
  part: Part = {
    type   : 'code',
    content: `<pre>
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
</code>
</pre>`
  };
  selectedPart = {};
  parts: Part[];
  errorMessage;
  
  constructor(private partService: PartService) { }
  
  deletePart(part) {
    this.partService.deletePart(part._id).subscribe(
      () => part = {},
      error => this.errorMessage = <any>error
    );
  }
  
  createPart(part) {
    this.partService.createPart(part).subscribe(
      part => {
        this.parts.push(part);
        this.part.content = '';
      },
      error => this.errorMessage = <any>error
    );
  }
  
  getParts() {
    this.partService.getParts().subscribe(
      parts => this.parts = parts,
      error => this.errorMessage = error
    );
  }
  
  updatePart(part) {
    this.partService.updatePart(part).subscribe(
      part => console.log('Part is updated...'),
      error => this.errorMessage = <any>error
    );
  }
  
  selectPart(part: Part) {
    this.selectedPart = part;
  }
}
