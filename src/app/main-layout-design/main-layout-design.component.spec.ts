import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutDesignComponent } from './main-layout-design.component';

describe('MainLayoutDesignComponent', () => {
  let component: MainLayoutDesignComponent;
  let fixture: ComponentFixture<MainLayoutDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
