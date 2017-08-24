import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { SearchItemsComponent } from '../search-items/search-items.component';
import { SharedModule } from '../../../shared/shared.module';
import { MdIconModule, MdInputModule } from '@angular/material';
import { ItemService } from '../item.service';
import { APP_CONFIG, CASHPLAY_CONFIG } from '../../../AppConfig';
import { FormsModule } from '@angular/forms';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  const itemServiceStub = new ItemService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsComponent,
        SearchItemsComponent,
      ],
      providers: [
        {provide: ItemService, useValue: itemServiceStub},
        {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
      ],
      imports: [
        FormsModule,
        SharedModule,
        MdInputModule,
        MdIconModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
