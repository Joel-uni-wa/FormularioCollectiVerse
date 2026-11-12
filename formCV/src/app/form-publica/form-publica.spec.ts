import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublica } from './form-publica';

describe('FormPublica', () => {
  let component: FormPublica;
  let fixture: ComponentFixture<FormPublica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPublica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPublica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
