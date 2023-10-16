import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeModalComponent } from './contact-me-modal.component';

describe('ContactMeModalComponent', () => {
  let component: ContactMeModalComponent;
  let fixture: ComponentFixture<ContactMeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMeModalComponent]
    });
    fixture = TestBed.createComponent(ContactMeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
