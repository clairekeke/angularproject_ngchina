import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1testComponent } from './e1test.component';

describe('E1testComponent', () => {
  let component: E1testComponent;
  let fixture: ComponentFixture<E1testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
