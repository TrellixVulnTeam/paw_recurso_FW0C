import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocalComponent } from './editar-local.component';

describe('EditarLocalComponent', () => {
  let component: EditarLocalComponent;
  let fixture: ComponentFixture<EditarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
