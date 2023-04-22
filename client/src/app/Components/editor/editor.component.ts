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
import jsPDF from 'jspdf';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  title = 'angular-editor-fabric-js';

  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;
  addName: string = '';
  doAddName(){
    this.addName+=' {name}';
  }

  constructor() { }

  ngOnInit(): void {
  }

  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizePDF(){
    var __CANVAS = document.getElementById('canvas');
    let width = __CANVAS.clientWidth; 
    let height = __CANVAS.clientHeight;
    let pdf;
    // let pdf = new jsPDF('portrait','px',[height, width]);
    //set the orientation
    if(width > height){
      pdf = new jsPDF('l', 'px', [width, height]);
    }
    else{
      pdf = new jsPDF('p', 'px', [height, width]);
    }
    //then we get the dimensions from the 'pdf' file itself
    width = pdf.internal.pageSize.getWidth();
    height = pdf.internal.pageSize.getHeight();
    pdf.addImage(__CANVAS, 'PNG', 0, 0,width,height);
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

  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  public confirmClear() {
    this.canvas.confirmClear();
  }

  // public changeSize() {
  //   this.canvas.changeSize();
  // }

  public addText() {
    this.canvas.addText();
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
}