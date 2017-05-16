import { Platform, MenuController } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'koios-layout [type="blank"]',
  template: `
  <div class="header-image"></div>
  <div class="main-content">
    <ng-content></ng-content>
  </div>
`
})
export class LayoutComponent {
}
