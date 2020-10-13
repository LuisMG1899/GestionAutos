import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontainerContainer } from './editarcontainer.container';

describe('EditarcontainerComponent', () => {
  let component: EditarcontainerContainer;
  let fixture: ComponentFixture<EditarcontainerContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcontainerContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcontainerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
