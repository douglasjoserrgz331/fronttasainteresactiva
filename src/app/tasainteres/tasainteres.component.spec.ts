import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasainteresComponent } from './tasainteres.component';

describe('TasainteresComponent', () => {
  let component: TasainteresComponent;
  let fixture: ComponentFixture<TasainteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasainteresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasainteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
