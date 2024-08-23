import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdashComponent } from './newsdash.component';

describe('NewsdashComponent', () => {
  let component: NewsdashComponent;
  let fixture: ComponentFixture<NewsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
