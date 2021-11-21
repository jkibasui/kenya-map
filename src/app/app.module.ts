import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { kenyaMapModule } from './kenya-map/kenya-map.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    kenyaMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
