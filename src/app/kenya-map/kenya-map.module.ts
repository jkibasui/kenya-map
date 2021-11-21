import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { kenyaMapService } from './kenya-map.service';
import { kenyaMapComponent } from './kenya-map.component';
import { KenyaCountiesMapComponent } from './kenya-counties-map/kenya-counties-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [kenyaMapComponent, KenyaCountiesMapComponent,],
  providers: [kenyaMapService],
  exports: [kenyaMapComponent, KenyaCountiesMapComponent,]
})
export class kenyaMapModule { }
