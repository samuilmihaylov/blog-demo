import {DoBootstrap, NgModule} from '@angular/core';
import {DashboardModule} from 'app/dashboard/dashboard.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    DashboardModule
  ]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap() {
  }
}
