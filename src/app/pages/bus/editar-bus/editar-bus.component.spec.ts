import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBusComponent } from './editar-bus.component';

describe('EditarBusComponent', () => {
  let component: EditarBusComponent;
  let fixture: ComponentFixture<EditarBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBusComponent]
    });
    fixture = TestBed.createComponent(EditarBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
