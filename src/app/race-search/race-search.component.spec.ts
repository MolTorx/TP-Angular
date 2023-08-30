import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSearchComponent } from './race-search.component';

describe('RaceSearchComponent', () => {
  let component: RaceSearchComponent;
  let fixture: ComponentFixture<RaceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceSearchComponent]
    });
    fixture = TestBed.createComponent(RaceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
