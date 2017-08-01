import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    PanelComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
