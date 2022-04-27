import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGiocoComponent } from './home-gioco.component';

describe('HomeGiocoComponent', () => {
  let component: HomeGiocoComponent;
  let fixture: ComponentFixture<HomeGiocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGiocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGiocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
