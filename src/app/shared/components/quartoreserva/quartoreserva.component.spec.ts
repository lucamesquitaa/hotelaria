import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoreservaComponent } from './quartoreserva.component';

describe('QuartoreservaComponent', () => {
  let component: QuartoreservaComponent;
  let fixture: ComponentFixture<QuartoreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartoreservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartoreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
