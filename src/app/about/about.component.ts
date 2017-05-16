import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {

    constructor( ) {
        console.debug('AboutComponent constructor');
     }

    ngOnInit(): void {
        console.debug('AboutComponent ngOnInit');
    }
}
