import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContainer } from './editar.container';

describe('EditarContainer', () => {
  let component: EditarContainer;
  let fixture: ComponentFixture<EditarContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
