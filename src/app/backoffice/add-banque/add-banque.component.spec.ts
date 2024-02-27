import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanqueComponent } from './add-banque.component';

describe('AddBanqueComponent', () => {
  let component: AddBanqueComponent;
  let fixture: ComponentFixture<AddBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
