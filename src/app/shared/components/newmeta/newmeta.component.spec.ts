import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmetaComponent } from './newmeta.component';

describe('NewmetaComponent', () => {
  let component: NewmetaComponent;
  let fixture: ComponentFixture<NewmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewmetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
