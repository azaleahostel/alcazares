import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaserviciosComponent } from './tarjetaservicios.component';

describe('TarjetaserviciosComponent', () => {
  let component: TarjetaserviciosComponent;
  let fixture: ComponentFixture<TarjetaserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
