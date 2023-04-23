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

  public updateTemplate(id:string,template: Template):Observable<any>{
    return this._http.put<any>(`http://localhost:8080/${id}/update`,template);
  }

  public deleteTemplate(id:string):Observable<any>{
    return this._http.delete<any>(`http://localhost:8080/${id}/delete`);
  }

  public fetchTemplate(id:string):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/${id}/fetch`);
  }

  public getEmpData():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getAllEmployee');
  }

  public deleteAllTemplate():Observable<any>{
    return this._http.delete<any>('http://localhost:8080/deleteAll');
  }

  public getAllTemplate():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getAll');
  }
}
