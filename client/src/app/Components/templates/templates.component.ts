import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // select template
  public selectedValue: string;
  // template list
  public templates: any[] = [
    { value: 'Template 1' },
    { value: 'Template 2' },
    { value: 'Template 3' },
  ]

}
