import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  const authServiceStub: AuthService = new AuthService(null, null, null, null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent, LoginComponent, RegisterComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
      ],
      imports: [
        FormsModule,
        SharedModule,

        MdInputModule,
        MdButtonModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
