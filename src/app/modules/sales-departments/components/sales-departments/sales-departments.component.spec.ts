import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDepartmentsComponent } from './sales-departments.component';

describe('SalesDepartmentsComponent', () => {
  let component: SalesDepartmentsComponent;
  let fixture: ComponentFixture<SalesDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
