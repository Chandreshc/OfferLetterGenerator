import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditorComponent } from './Components/editor/editor.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { TemplatesComponent } from './Components/templates/templates.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
