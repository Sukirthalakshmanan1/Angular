import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { AttibuteBindingComponent } from './attibute-binding/attibute-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventhandlingComponent,
    AttibuteBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
