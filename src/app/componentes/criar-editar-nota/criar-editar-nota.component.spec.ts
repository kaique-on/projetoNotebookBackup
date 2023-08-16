import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarNotaComponent } from './criar-editar-nota.component';

describe('CriarEditarNotaComponent', () => {
  let component: CriarEditarNotaComponent;
  let fixture: ComponentFixture<CriarEditarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditarNotaComponent]
    });
    fixture = TestBed.createComponent(CriarEditarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
