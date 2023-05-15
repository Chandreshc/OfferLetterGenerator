import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricjsEditorModule } from 'projects/angular-editor-fabric-js/src/public-api';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditorComponent } from './Components/editor/editor.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHeaderResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { TemplatesComponent } from './Components/templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DashboardComponent,
    CandidateComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FabricjsEditorModule,
    FormsModule,
    ColorPickerModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
