import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy,
         HashLocationStrategy/*, PathLocationStrategy*/ }         from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Ng2BootstrapModule }           from 'ngx-bootstrap';
import { ChartsModule }                 from 'ng2-charts';

import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

// Routing Module
import { AppRoutingModule } from './app.routing';

import { LayoutModule } from './layout/layout.module';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParallaxHeaderDirective } from './shared/components/parallax-header/parallax-header.directive';


@NgModule({
  declarations: [
    MyApp,
    ParallaxHeaderDirective
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    Ng2BootstrapModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
    LayoutModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy // This strategy with base-href './' allow to move the app to any subsite and works
      // useClass: PathLocationStrategy // Only if passed the --base-href argument at build & the server has url rewrite to index.html
    },

    Network,
    StatusBar,
    SplashScreen,

    AuthService,
    AuthGuardService
  ]
})
export class AppModule { }
