import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesPoolComponent } from './cartes-pool.component';

describe('CartesPoolComponent', () => {
  let component: CartesPoolComponent;
  let fixture: ComponentFixture<CartesPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartesPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
