import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeader.CmpComponent } from './app-header.cmp.component';

describe('AppHeader.CmpComponent', () => {
  let component: AppHeader.CmpComponent;
  let fixture: ComponentFixture<AppHeader.CmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeader.CmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeader.CmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
