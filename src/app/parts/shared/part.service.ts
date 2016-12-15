import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Part } from '../parts.models';

@Injectable()
export class PartService {
  
  constructor(private http: Http) { }
  
  createPart(part) {
    return this.http
               .post('http://localhost:8080/parts', part)
               .map((response: Response) => <Part>response.json())
               .catch(this.handleError);
  }
  
  deletePart(partId: string) {
    return this.http
               .delete(`http://localhost:8080/parts/${partId}`)
               .map((response: Response) => <Part>response.json())
               .catch(this.handleError);
  }
  
  getParts() {
    return this.http
               .get('http://localhost:8080/parts')
               .map((response: Response) => <Part[]>response.json())
               .catch(this.handleError);
  }
  
  updatePart(part) {
    return this.http
               .put(`http://localhost:8080/parts/${part._id}`, part)
               .map((response: Response) => <Part>response.json())
               .catch(this.handleError);
  }
  
  private handleError(error) {
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
  
}
