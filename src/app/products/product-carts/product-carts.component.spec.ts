import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartsComponent } from './product-carts.component';

describe('ProductCartsComponent', () => {
  let component: ProductCartsComponent;
  let fixture: ComponentFixture<ProductCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
