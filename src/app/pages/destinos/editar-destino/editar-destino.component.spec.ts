import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDestinoComponent } from './editar-destino.component';

describe('EditarDestinoComponent', () => {
  let component: EditarDestinoComponent;
  let fixture: ComponentFixture<EditarDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDestinoComponent]
    });
    fixture = TestBed.createComponent(EditarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
