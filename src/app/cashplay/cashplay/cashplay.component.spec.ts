import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashplayComponent } from './cashplay.component';
import { MdButtonModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { NavComponent } from '../nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CashplayComponent', () => {
  let component: CashplayComponent;
  let fixture: ComponentFixture<CashplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CashplayComponent, NavComponent],
      imports: [
        RouterTestingModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
