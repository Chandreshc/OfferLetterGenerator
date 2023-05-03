import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/entity/template';
import { TemplateService } from 'src/app/service/template.service';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  TemplateList: Template[] = [];

  constructor(private _service:TemplateService,private _router:Router) { }

  ngOnInit(): void {
    this._service.getAllTemplate().subscribe(
      data => {
        console.log(data);
        data.forEach(i => {
          const temp = new Template(i.id,i.templateObj,i.name,new Date(i.creationDate));
          this.TemplateList.push(temp);
        });
        console.log(this.TemplateList);
      },
      error => {
        console.log(error);
      }
    )
  }

  gotoeditor(){
    // window.location.href='editor';
    this._router.navigate(['editor'], {state: {template: undefined}});
  }

  deleteAll(){
    this._service.deleteAllTemplate().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  editTemplate(j:number){
    console.log(this.TemplateList[j].id);
    localStorage.setItem("Current", this.TemplateList[j].id);
    localStorage.setItem("Kanvas", this.TemplateList[j].templateObj);
    this._router.navigate(['editor'],{state: {template:this.TemplateList[j]}});
  }

  deleteTemplate(j:number){
    console.log(this.TemplateList[j].id);
    this._service.deleteTemplate(this.TemplateList[j].id).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
}
