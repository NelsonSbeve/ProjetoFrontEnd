import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleGameComponent } from './little-game.component';

describe('LittleGameComponent', () => {
  let component: LittleGameComponent;
  let fixture: ComponentFixture<LittleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
