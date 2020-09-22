import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxshotsListComponent } from './boxshots-list.component';

describe('BoxshotsListComponent', () => {
  let component: BoxshotsListComponent;
  let fixture: ComponentFixture<BoxshotsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxshotsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxshotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
