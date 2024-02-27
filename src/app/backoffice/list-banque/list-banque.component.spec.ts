import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBanqueComponent } from './list-banque.component';

describe('ListBanqueComponent', () => {
  let component: ListBanqueComponent;
  let fixture: ComponentFixture<ListBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
