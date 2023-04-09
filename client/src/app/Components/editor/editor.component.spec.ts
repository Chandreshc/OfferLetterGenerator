// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { EditorComponent } from './Editor.component';

// describe('EditorComponent', () => {
//   let component: EditorComponent;
//   let fixture: ComponentFixture<EditorComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditorComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { TestBed, async } from '@angular/core/testing';
import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-editor-fabric-js'`, () => {
    const fixture = TestBed.createComponent(EditorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-editor-fabric-js');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-editor-fabric-js app is running!');
  });
});
