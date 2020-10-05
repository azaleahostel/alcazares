import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoncontactoComponent } from './botoncontacto.component';

describe('BotoncontactoComponent', () => {
  let component: BotoncontactoComponent;
  let fixture: ComponentFixture<BotoncontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoncontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoncontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
