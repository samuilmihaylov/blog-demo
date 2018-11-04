import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from 'app/dashboard/dashboard.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  entryComponents: [
    DashboardComponent
  ]
})

export class DashboardModule {
  constructor(private injector: Injector) {
    customElements.define('app-dashboard', createCustomElement(DashboardComponent, {injector}));
  }
}
