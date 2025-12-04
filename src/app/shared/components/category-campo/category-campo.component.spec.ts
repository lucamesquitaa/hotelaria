import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCampoComponent } from './category-campo.component';

describe('CategoryCampoComponent', () => {
  let component: CategoryCampoComponent;
  let fixture: ComponentFixture<CategoryCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCampoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
