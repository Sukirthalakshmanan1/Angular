import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttibuteBindingComponent } from './attibute-binding.component';

describe('AttibuteBindingComponent', () => {
  let component: AttibuteBindingComponent;
  let fixture: ComponentFixture<AttibuteBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttibuteBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttibuteBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
