import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBusComponent } from './nuevo-bus.component';

describe('NuevoBusComponent', () => {
  let component: NuevoBusComponent;
  let fixture: ComponentFixture<NuevoBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoBusComponent]
    });
    fixture = TestBed.createComponent(NuevoBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
