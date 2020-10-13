import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcContainer } from './registrarc.container';

describe('RegistrarcComponent', () => {
  let component: RegistrarcContainer;
  let fixture: ComponentFixture<RegistrarcContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
