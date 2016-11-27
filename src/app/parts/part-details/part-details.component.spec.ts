/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDetailsComponent } from './part-details.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Part } from '../parts.models';

describe('PartDetailsComponent', () => {
  let component: PartDetailsComponent;
  let fixture: ComponentFixture<PartDetailsComponent>;
  
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [PartDetailsComponent],
        imports     : [ReactiveFormsModule]
      })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('PartForm', () => {
    it('should create PartForm', () => {
      expect(component.partForm instanceof FormGroup).toBeTruthy();
    });
    
    it('should set form with given part', () => {
      component.setPartForm(component.partForm, component.partTypes, new Part('text', 'text content'));
      expect(component.partForm.value).toEqual({type: 'text', content: {code: '', text: 'text content', video: ''}});
      component.setPartForm(component.partForm, component.partTypes, new Part('code', 'code content'));
      expect(component.partForm.value).toEqual({type: 'code', content: {code: 'code content', text: '', video: ''}});
    });
    
    it('should detect changes on part form', () => {
      component.partForm.setValue({type: 'text', content: {code: '', text: 'text content', video: ''}});
      expect(component.partForm.value).toEqual({type: 'text', content: {code: '', text: 'text content', video: ''}});
    });
  });
  
  describe('PartValidator', () => {
    it('should return when type is selected and selected type`s content is not empty', () => {
      component.partForm.setValue({type: 'text', content: {code: '', text: 'text content', video: ''}});
      expect(component.partValidator(component.partForm)).toBeNull();
    });
    
    it('should return error when no type is selected', () => {
      component.partForm.setValue({type: '', content: {code: '', text: '', video: ''}});
      expect(component.partValidator(component.partForm)).toEqual({'missing-content': true});
    });
    
    it('should return error when type is selected but selected type`s content is empty', () => {
      component.partForm.setValue({type: 'text', content: {code: '', text: '', video: ''}});
      expect(component.partValidator(component.partForm)).toEqual({'missing-content': true});
    });
  });
  
  describe('Part', () => {
    it('should create Part', () => {
      expect(component.part instanceof Part).toBeTruthy();
    });
    
    it('should set Part', () => {
      component.partForm.setValue({type: 'text', content: {code: '', text: 'text-content', video: ''}});
      expect(component.setPart(component.part, component.partForm.value)).toEqual(new Part('text', 'text-content'));
    });
  });
});
