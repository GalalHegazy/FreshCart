import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarndsComponent } from './barnds.component';

describe('BarndsComponent', () => {
  let component: BarndsComponent;
  let fixture: ComponentFixture<BarndsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BarndsComponent]
    });
    fixture = TestBed.createComponent(BarndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
