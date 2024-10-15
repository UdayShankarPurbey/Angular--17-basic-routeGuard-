import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRegisteredComponent } from './not-registered.component';

describe('NotRegisteredComponent', () => {
  let component: NotRegisteredComponent;
  let fixture: ComponentFixture<NotRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotRegisteredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
