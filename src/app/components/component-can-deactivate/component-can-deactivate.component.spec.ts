import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCanDeactivateComponent } from './component-can-deactivate.component';

describe('ComponentCanDeactivateComponent', () => {
  let component: ComponentCanDeactivateComponent;
  let fixture: ComponentFixture<ComponentCanDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCanDeactivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCanDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
