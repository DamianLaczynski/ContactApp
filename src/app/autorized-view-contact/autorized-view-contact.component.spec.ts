import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizedViewContactComponent } from './autorized-view-contact.component';

describe('AutorizedViewContactComponent', () => {
  let component: AutorizedViewContactComponent;
  let fixture: ComponentFixture<AutorizedViewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizedViewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizedViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
