import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnProductComponent } from './search-on-product.component';

describe('SearchOnProductComponent', () => {
  let component: SearchOnProductComponent;
  let fixture: ComponentFixture<SearchOnProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOnProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
