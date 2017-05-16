import { LayoutModule } from './../layout/layout.module';
import { CommonModule } from '@angular/common';
import { NgModule }                 from '@angular/core';
import { ChartsModule }             from 'ng2-charts/ng2-charts';
import { AboutComponent }       from './about.component';
import { AboutRoutingModule }   from './about-routing.module';

import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        //IonicModule,
        ChartsModule,
        LayoutModule
    ],
    declarations: [ AboutComponent ]
})
export class AboutModule { }
