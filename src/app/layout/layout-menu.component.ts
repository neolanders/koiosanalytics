import { Platform, MenuController } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from "./layout.component";

@Component({
  selector: 'koios-layout [type="menu"]',
  template:
  `
  <koios-menu>
    <div koios-menu-items>
      <ng-content select="[menu-items]"></ng-content>
    </div>
    <ng-content></ng-content>
  </koios-menu>
  `
})
export class LayoutMenuComponent extends LayoutComponent {
}
