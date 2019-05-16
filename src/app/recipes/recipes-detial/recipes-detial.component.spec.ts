import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetialComponent } from './recipes-detial.component';

describe('RecipesDetialComponent', () => {
  let component: RecipesDetialComponent;
  let fixture: ComponentFixture<RecipesDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
