import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcoComponent } from './registrarco.component';

describe('RegistrarcoComponent', () => {
  let component: RegistrarcoComponent;
  let fixture: ComponentFixture<RegistrarcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
