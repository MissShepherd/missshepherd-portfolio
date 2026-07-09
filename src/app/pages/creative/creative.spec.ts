import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creative } from './creative';

describe('Creative', () => {
  let component: Creative;
  let fixture: ComponentFixture<Creative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creative],
    }).compileComponents();

    fixture = TestBed.createComponent(Creative);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
