// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-editor',
//   templateUrl: './editor.component.html',
//   styleUrls: ['./editor.component.scss']
// })
// export class editorComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';
import { Template } from 'src/app/entity/template.js';
import { TemplateService } from 'src/app/service/template.service.js';
import './../../../assets/js/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  title: string;
  pdfObject: any;
  template: Template;
  toggler: Boolean;

  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;
  addName: string = '';
  doAddName() {
    this.canvas.textString += ' {name}';
    this.addName += ' {name}';
  }

  constructor(private _service:TemplateService,private _router:Router) { 
    console.log(this._router.getCurrentNavigation().extras.state.template);
    this.template = this._router.getCurrentNavigation().extras.state.template;
    this.toggler = this.template == undefined;
    this.title = this.template==undefined? "": this.template.name;
    // this.loadCanvasFromJSON();
    // this.canvas.loadCanvasFromJsonObject(JSON.parse(this.template.templateObj));
    // document.addEventListener("DOMContentLoaded",this.canvas.loadCanvasFromJSON);
  }

  ngOnInit(): void {
    // document.addEventListener("DOMContentLoaded",this.canvas.loadCanvasFromJSON);
  }

  // public async loader(){
  //   await this.loadCanvasFromJSON();
  // }

  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizePDF() {
    var __CANVAS = document.getElementById('canvas2');
    let width = 711;
    let height = 1007;
    console.log(height,width);
    let pdf;
    // let pdf = new jsPDF('portrait','px',[height, width]);
    //set the orientation
    if (width > height) {
      pdf = new jsPDF('l', 'px', [width, height]);
    }
    else {
      pdf = new jsPDF('p', 'px', [height, width]);
    }
    //then we get the dimensions from the 'pdf' file itself
    width = pdf.internal.pageSize.getWidth();
    height = pdf.internal.pageSize.getHeight();
    pdf.addImage(__CANVAS, 'PNG', 0, 0, width, height);
    // this.pdfObject = pdf.output('datauristring')
    // console.log(this.pdfObject);
    pdf.save("download.pdf");
    // let canv = <HTMLCanvasElement> document.getElementById('canvas');
    // var imgData = canv.toDataURL("image/jpeg", 1.0);
    // var pdf = new jsPDF();
    // console.log(imgData);
    // let width = canv.clientWidth; 
    // let height = canv.clientHeight;
    // pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
    // pdf.save("download.pdf");
  }

  // public zoomInOut($event){
  //   let canv = <HTMLCanvasElement> document.getElementById('canvas');
  //   let context = canv.getContext('2d');
  //   console.log(context);
  //   let scaleele = <HTMLInputElement> document.getElementById('vol');
  //   let scale = Number(scaleele.value);
  //   context.scale(scale,scale);
  //   context.save();

  //   this.canvas.size.width *= scale;
  //   this.canvas.size.height *= scale;
  // }

  public rasterizeSVG() {
    this.canvas.rasterizeSVG();
  }

  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }

  public onClose(){
    const temp=this.canvas.canvasObject();
    console.log(temp)
    if(temp!=localStorage.getItem("Kanvas")){
      alert("Not Saved");
    }else{
      localStorage.clear();
      this._router.navigate(['dashboard']);
    }
  }

  public async loadCanvasFromJSON() {
    // const tempVariable = localStorage.getItem('Kanvas')
    // console.log(tempVariable);
    // await this.canvas.loadCanvasFromJsonObject(JSON.parse(tempVariable));
    this.canvas.loadCanvasFromJSON();
    // this.canvas.changeCanvas();
  }

  public async loadCanvasFromJSON2(){
    this.canvas.loadCanvasFromJSON2();
    await this.rasterizePDF();

  }

  public confirmClear() {
    this.canvas.confirmClear();
  }

  // public changeSize() {
  //   this.canvas.changeSize();
  // }

  public addText() {
    this.canvas.addText();
    // added this to reset the addName model
    this.addName = ''; 
  }

  public getImgPolaroid(event) {
    this.canvas.getImgPolaroid(event);
  }

  public addImageOnCanvas(url) {
    this.canvas.addImageOnCanvas(url);
  }

  public readUrl(event) {
    this.canvas.readUrl(event);
  }

  public removeWhite(url) {
    this.canvas.removeWhite(url);
  }

  public addFigure(figure) {
    this.canvas.addFigure(figure);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public sendToBack() {
    this.canvas.sendToBack();
  }

  public bringToFront() {
    this.canvas.bringToFront();
  }

  public clone() {
    this.canvas.clone();
  }

  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }

  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  public setId() {
    this.canvas.setId();
  }

  public setOpacity() {
    this.canvas.setOpacity();
  }

  public setFill() {
    this.canvas.setFill();
  }

  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  public setTextAlign(value) {
    this.canvas.setTextAlign(value);
  }

  public setBold() {
    this.canvas.setBold();
  }

  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  public hasTextDecoration(value) {
    this.canvas.hasTextDecoration(value);
  }

  public setTextDecoration(value) {
    this.canvas.setTextDecoration(value);
  }

  public setFontSize() {
    this.canvas.setFontSize();
  }

  public setLineHeight() {
    this.canvas.setLineHeight();
  }

  public setCharSpacing() {
    this.canvas.setCharSpacing();
  }

  public rasterizeJSON() {
    this.canvas.rasterizeJSON();
  }

  public drawMode() {
    this.canvas.drawingMode();
  }

  public tempEmail(){
    this._service.getObj(localStorage.getItem("Current")).subscribe(
      data => {
        console.log(data)
        this.mailSender(data);  
      },
      error => {
        console.log(error)
      }
    )
  }

  public async mailSender(data:any){
    data.forEach(i => {
      // console.log(i["tempObj"]);
      console.log("gmail",i["gmail"]);
      const tempObj:JSON = JSON.parse(i["tempObj"]);
      console.log(tempObj);
      localStorage.setItem('Kanva',JSON.stringify(tempObj));
      this.loadCanvasFromJSON2();
      this.rasterizePDF();
      // await this.sendMail(i["gmail"]);
          
      // this.loadCanvasFromJSON2();
      // this.rasterizePDF();
      // this.sendMail(i["gmail"]);
      // console.log("object",i["tempObj"]);
    });
  }
  

  public sendMail(receiver:string) {
    
    Email.send({
      SecureToken: "your security token",
      To: receiver,
      From: "your mail id",
      Subject: "This is changed",
      Body: "And this is the offer letter attached",
      Attachments : [
        {
          name : "OfferLetter.pdf",
          data : this.pdfObject
          // path : ""
        }]
    }).then(
      message => alert(message)
    );
  }

  public saveTemplate(){
    this.saveCanvasToJSON();
    const temp = new Template("",localStorage.getItem("Kanvas"),this.title,new Date);
    this._service.saveTemplate(temp).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  public updateTemplate(){
    this.saveCanvasToJSON();
    const temp = new Template("",localStorage.getItem('Kanvas'),this.template.name,new Date);
    this._service.updateTemplate(localStorage.getItem('Current'),temp).subscribe(
      data => {
        console.log(data)
      },
      error => {console.log(error)}
    )
  }

  // temp = this.loadCanvasFromJSON();
   
}

