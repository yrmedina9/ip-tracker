import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IpTrackerModule } from './core/presentation/ip-tracker/ip-tracker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IpTrackerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
