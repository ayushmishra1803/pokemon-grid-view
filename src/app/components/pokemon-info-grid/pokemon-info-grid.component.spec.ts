import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoGridComponent } from './pokemon-info-grid.component';

describe('PokemonInfoGridComponent', () => {
  let component: PokemonInfoGridComponent;
  let fixture: ComponentFixture<PokemonInfoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInfoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
