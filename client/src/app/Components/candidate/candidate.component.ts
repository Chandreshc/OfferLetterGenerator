import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  // router: any;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  // candidates list
  selectAllCandidates: boolean = false;
  candidates: any[] = [
    { id: 1, name: 'Candidate 1', selected: false },
    { id: 2, name: 'Candidate 2', selected: false },
    { id: 3, name: 'Candidate 3', selected: false }
  ];

  // select logic
  selectAllItems() {
    for (let candidate of this.candidates) {
      candidate.selected = this.selectAllCandidates;
    }
  }

  gotoTemplates() {
    this._router.navigate(['/templates']);
  }
}