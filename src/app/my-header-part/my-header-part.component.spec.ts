import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeaderPartComponent } from './my-header-part.component';

describe('MyHeaderPartComponent', () => {
  let component: MyHeaderPartComponent;
  let fixture: ComponentFixture<MyHeaderPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeaderPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeaderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
