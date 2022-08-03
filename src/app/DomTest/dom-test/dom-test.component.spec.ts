import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomTestComponent } from './dom-test.component';

describe('DomTestComponent', () => {
  let component: DomTestComponent;
  let fixture: ComponentFixture<DomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title',()=>{
    expect(component.title).toBe('Dom Test');
  })
  it('should render in a h1 tag',()=>{
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Dom Test');
  })
});
