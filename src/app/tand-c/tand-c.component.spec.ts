import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandCComponent } from './tand-c.component';

describe('TandCComponent', () => {
  let component: TandCComponent;
  let fixture: ComponentFixture<TandCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
