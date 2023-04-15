import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicContactsComponent } from './public-contacts.component';

describe('PublicContactsComponent', () => {
  let component: PublicContactsComponent;
  let fixture: ComponentFixture<PublicContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
