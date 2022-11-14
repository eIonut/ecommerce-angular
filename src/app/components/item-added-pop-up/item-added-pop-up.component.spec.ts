import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddedPopUpComponent } from './item-added-pop-up.component';

describe('ItemAddedPopUpComponent', () => {
  let component: ItemAddedPopUpComponent;
  let fixture: ComponentFixture<ItemAddedPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAddedPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAddedPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
