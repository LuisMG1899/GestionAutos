import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosAdminmContainer } from './autos-adminm.container';

describe('AutosAdminmComponent', () => {
  let component: AutosAdminmContainer;
  let fixture: ComponentFixture<AutosAdminmContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosAdminmContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosAdminmContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
