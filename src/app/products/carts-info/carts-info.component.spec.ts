import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsInfoComponent } from './carts-info.component';

describe('CartsInfoComponent', () => {
  let component: CartsInfoComponent;
  let fixture: ComponentFixture<CartsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
