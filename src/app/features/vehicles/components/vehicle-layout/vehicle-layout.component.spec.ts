import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLayoutComponent } from './vehicle-layout.component';

describe('VehicleLayoutComponent', () => {
  let component: VehicleLayoutComponent;
  let fixture: ComponentFixture<VehicleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
