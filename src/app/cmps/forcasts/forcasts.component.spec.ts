import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastsComponent } from './forcasts.component';

describe('ForcastsComponent', () => {
  let component: ForcastsComponent;
  let fixture: ComponentFixture<ForcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
