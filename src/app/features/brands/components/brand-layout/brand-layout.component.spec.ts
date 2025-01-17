import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLayoutComponent } from './brand-layout.component';

describe('BrandLayoutComponent', () => {
  let component: BrandLayoutComponent;
  let fixture: ComponentFixture<BrandLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
