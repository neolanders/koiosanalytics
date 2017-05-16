import { LayoutTabComponent, TabNone } from './layout-tab.component';
import { LayoutMenuComponent } from './layout-menu.component';
import { LeftMenuService, RightMenuService } from './../shared/services/menu.service';
import { BreadcrumbsComponent } from './../shared/components/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { IonicModule, Item } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserinfoComponent } from './header/userinfo/userinfo.component';
import { MenuItemComponent } from '../shared/components/menu-item/menu-item.component';
// import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    TabNone,
    MenuItemComponent,
    LayoutComponent,
    LayoutMenuComponent,
    LayoutTabComponent,
    HeaderComponent,
    MenuComponent,
    UserinfoComponent,
    BreadcrumbsComponent],
  providers: [LeftMenuService, RightMenuService],
  exports: [
    LayoutComponent,
    LayoutMenuComponent,
    LayoutTabComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent
  ],
  entryComponents: [UserinfoComponent, TabNone]
})
export class LayoutModule { }
