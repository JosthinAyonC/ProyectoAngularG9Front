import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarboletoComponent } from './comprarboleto.component';

describe('ComprarboletoComponent', () => {
  let component: ComprarboletoComponent;
  let fixture: ComponentFixture<ComprarboletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarboletoComponent]
    });
    fixture = TestBed.createComponent(ComprarboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
