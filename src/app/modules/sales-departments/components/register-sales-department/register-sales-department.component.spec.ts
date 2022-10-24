import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalesDepartmentComponent } from './register-sales-department.component';

describe('RegisterSalesDepartmentComponent', () => {
  let component: RegisterSalesDepartmentComponent;
  let fixture: ComponentFixture<RegisterSalesDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSalesDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSalesDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
