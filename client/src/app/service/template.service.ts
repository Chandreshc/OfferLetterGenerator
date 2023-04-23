import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../entity/template';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private _http: HttpClient) { }

  public saveTemplate(template: Template):Observable<any>{
    return this._http.post<any>('http://localhost:8080/new',template);
  }

  
}
